const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid");

const router = express.Router();
const { S3Client } = require("@aws-sdk/client-s3");
const { PrismaClient } = require("@prisma/client");
const s3 = new S3Client({ region: process.env.AWS_S3_REGION });

const prisma = new PrismaClient();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const [_, ext] = file.originalname.match(/(\.\w+)$/);
      const key = uuid.v4() + ext;
      cb(null, key);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

router.get("/getHashtags", async function (req, res) {
  try {
    const hashtags = await prisma.hashtags.findMany({
      orderBy: {
        createdAt: "desc",
      }
    })
    res.status(200).json(hashtags);
  } catch (error) {
    console.error(error);
  }
});

router.post("/addPost", upload.array("image"), async (req, res) => {
  try {
    const { link, brand, category, season, reason, hashtag } = req.body;
    const { name, userId } = req.session;

    const hashTags = [
      category, season, brand, name,
      ...([...hashtag.matchAll(/#([^\s#]+)/g)]).map(e => e[1]),
    ];

    const data = {
        link, brand, category, season, reason, name,
        UserId: userId,
        PostHashtags: {
          create: hashTags.map(name => ({
            hashtag: {
              connectOrCreate: {where: {name}, create: {name}} 
            }
          }))
        },
    };

    if (Array.isArray(req.files)) {
      data.images = {
        create: req.files.map(image => ({src: image.location, name: image.originalname}))
      }
    }
    

    const post = await prisma.posts.create({
      data,
      include: { PostHashtags: { include: { hashtag: true, }}, images: true},
    });

    const { PostHashtags: hashtags, ...rest} = post;
    const result = {...rest, hashtags: hashtags.map(tag => tag.hashtag)};

    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.get("/loadPost", async function (req, res) {
  try {
    // if (req.query.sort === "likes") {
    //   const limit = 24;
    //   const order = (req.query.order || "desc").toUpperCase();
    //   const page = parseInt(req.query.page || "1");
    //   const postsByLike = await Post.findAll({
    //     include: [
    //       {
    //         model: User,
    //         as: "Likers",
    //         attributes: [],
    //       },
    //     ],
    //     attributes: [
    //       [Sequelize.fn('COUNT', Sequelize.col('Likers.id')), 'likes'],
    //       "id",
    //       // ...Object.keys(Post.getAttributes()),
    //     ],
    //     subQuery: false,
    //     group: [Sequelize.col('Post.id')],
    //     order: [["likes", order]],
    //     offset: (page - 1) * limit,
    //     limit,
    //   });

    //   const postIds = postsByLike.map(e => e.id);

    //   const posts = await Post.findAll({
    //     where: {id: {}},
    //     include: [
    //       {
    //         model: Image,
    //         order: [["id", "DESC"]],
    //       },
    //       {
    //         model: Hashtag,
    //         order: [["createdAt", "DESC"]],
    //         attributes: ['name'],
    //         through: { attributes: [] }
    //       },
    //       {
    //         model: User,
    //         as: "Likers",
    //         attributes: ['name', 'id'],
    //         through: { attributes: [] }
    //       },
    //     ],
    //     order: Sequelize.literal(`FIELD(Post.id, ${postIds.join(',')})`)
    //   })

    //   res.status(200).json(posts);
    //   return;
    // }

    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = {lt: parseInt(req.query.lastId)};
    }

    const posts = await prisma.posts.findMany({
      include: {
        images: { orderBy: {id: "desc"}},
        PostHashtags: { orderBy: { createdAt: "desc"}, include: {hashtag: true}},
        likes: true,
      },
      orderBy: { createdAt: "desc" },
      where,
      take: 24,
    });

    const result = posts.map(post => {
      const { PostHashtags: hashtags, ...rest} = post;
      return {...rest, hashtags: hashtags.map(tag => tag.hashtag)};
    })

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
});

router.post("/deletpost/:postId", async function (req, res) {
  try {
    const id = parseInt(req.params.postId);
    const deletePost = await prisma.posts.delete({
      where: { id },
      });
    res.status(200).json({ PostId: deletePost.id });
  } catch {
    res.status(403).send("게시글이 없습니다.")
  }
  // TODO: 해시태그가 참조하는 게시글이 없다면 해시태그를 제거
});

router.patch("/:postId/like", async (req, res, next) => {
  // PATCH /post/1/like

  const postId = parseInt(req.params.postId);
  const { userId } = req.session;

  const post = await prisma.posts.findUnique({
    where: {id: postId}
  });

  if (!post) { return res.status(403).send("게시글이 존재하지 않습니다."); }

  console.log({postId, userId})

  try {
    const updatePost = await prisma.posts.update({
      where: {id: postId},
      data: {
        likes: {
          create: {
            user: {
              connect: {
                id: userId,
              }
            }
          }
        }
      }
    })

    return res.json({PostId: updatePost.id});
  } catch(error) {
    console.error(error);
    return res.status(401).json("alreday liked post");
  }
});

router.delete("/:postId/unlike", async (req, res, next) => {
  try {
    const postId = parseInt(req.params.postId);
    const { userId } = req.session;

    const deleteLike = await prisma.like.delete({
      where: { PostId_UserId: {
        PostId: postId,
        UserId: userId,
      } }
    })
    res.json({ PostId: deleteLike.PostId });
  } catch (error) {
    console.error(error);
    res.status(401).json("already unliked");
  }
});

router.post("/hashtagSearch", async (req, res) => {
  try {
    const hashtags = req.body.hashtags.match(/#[^\s#]+/g);
    var hashtagjson = [];
    for (let i = 0; i < hashtags.length; i++) {
      hashtagjson = [...hashtagjson, { name: hashtags[i].split("#")[1] }];
    }

    where = {};
    const posts = await Post.findAll({
      where: {},
      // limit: 24, limit 나중에 줘야함
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Hashtag,
          where: {
            [Op.or]: hashtagjson,
          },
          order: [["createdAt", "DESC"]],
        },
        {
          model: Image,
          order: [["id", "DESC"]],
        },
        {
          model: User,
          as: "Likers",
        },
      ],
    });

    var PostIdlist = [];
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].Hashtags.length == hashtags.length)
        PostIdlist = [...PostIdlist, { id: posts[i].id }];
    }
    where = {};
    const postsAllHashtags = await Post.findAll({
      where: {
        [Op.or]: PostIdlist,
      },
      // limit: 100,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Hashtag,
          order: [["createdAt", "DESC"]],
        },
        {
          model: Image,
          order: [["id", "DESC"]],
        },
      ],
    });
    res.status(200).json(postsAllHashtags);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:postId/duplicate", async (req, res, next) => {
  // PATCH /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId) },
      include: [
        {
          model: Hashtag,
          order: [["createdAt", "DESC"]],
        },
        {
          model: Image,
          order: [["id", "DESC"]],
        },
      ],
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }

    const newPost = await Post.create({
      link: post.link,
      brand: post.brand,
      category: post.category,
      season: post.season,
      reason: post.reason,
      // name: req.body.userName,
      // UserId : req.body.userId,
      name: post.name,
      UserId: post.UserId,
    });

    let hashtags = post.Hashtags;
    const result = await Promise.all(
      hashtags.map((tag) =>
        Hashtag.findOrCreate({
          where: { name: tag.name },
        })
      )
    ); // [[노드, true], [리액트, true]]
    await newPost.addHashtags(result.map((v) => v[0]));

    //이미지 복사
    if (Array.isArray(post.Images)) {
      // 이미지를 여러 개
      const images = await Promise.all(
        post.Images.map((image) => Image.create({ src: image.src }))
      );
      await newPost.addImages(images);
    } else {
      // 이미지를 하나
      const image = await Image.create({ src: post.Images[0].src });
      await newPost.addImages(image);
    }

    const madePost = await Post.findOne({
      where: { id: newPost.id },
      include: [
        {
          model: Image,
          order: [["id", "DESC"]],
        },
        {
          model: Hashtag,
          order: [["createdAt", "DESC"]],
        },
        {
          model: User,
          as: "Likers",
        },
      ],
    });

    res.json(madePost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/editPost", upload.array("image"), async (req, res) => {
  const { link, brand, category, season, reason, hashtag, imagePath } = req.body;
  const { name, userId } = req.session;
  const postId = parseInt(req.body.postId);
  if (!userId) {
    return res.status(401).json({ message: "notLoggedIn" });
  }

  const hashTags = [
    category, season, brand, name,
    ...([...hashtag.matchAll(/#([^\s#]+)/g)]).map(e => e[1]),
  ];

  if (Array.isArray(imagePath)) {
    data.images = {
      create: imagePath.map(image => ({src: image.location, name: image.originalname}))
    }
  }

  const data = {
      link, brand, category, season, reason, name,
      UserId: userId,
      PostHashtags: {
        deleteMany: {},
        create: hashTags.map(name => ({
          hashtag: {
            connectOrCreate: {where: {name}, create: {name}} 
          }
        }))
      },
  };

  const updatePost = await prisma.posts.update({
    where: { id: postId },
    data: data,
    include: {
      PostHashtags: { include: { hashtag: true }, orderBy: { createdAt: "desc" } },
      images: { orderBy: { id: "desc" }},
    }
  })

  const { PostHashtags: hashtags, ...rest} = updatePost;
  const result = {...rest, hashtags: hashtags.map(tag => tag.hashtag)};

  res.json({ postInfo: result, postId: updatePost.id });
});

//개인이 작성한 포스트 가져오기
router.post("/user", async (req, res) => {
  //login 상태일때만
  const { userId } = req.session;
  if (!userId) {
    return res.status(404).json({ message: "notLoggedIn" });
  }

  const posts = await prisma.posts.findMany({
    where: { UserId: userId },
    orderBy: { createdAt: "desc" },
    include: {
      PostHashtags: { include: { hashtag: true }, orderBy: { createdAt: "desc" }},
      images: {orderBy: { id: "desc" }},
      likes: true,
    }
  })

  const result = posts.map(post => {
    const { PostHashtags: hashtags, ...rest} = post;
    return {...rest, hashtags: hashtags.map(tag => tag.hashtag)};
  })

  return res.status(200).json(result);
});

//개인이 좋아요한 포스트 가져오기
router.post("/userLiked", async (req, res) => {
  //login 상태일때만
  const { userId } = req.session;
  console.log({userId});
  if (!userId) {
    return res.status(404).json({message: "notLoggedIn"});
  }

  const posts = await prisma.posts.findMany({
    where: { UserId: userId },
    orderBy: { createdAt: "desc" },
    include: {
      PostHashtags: { include: { hashtag: true }, orderBy: {createdAt: "desc"}},
      images: {orderBy: {id: "desc"}},
      likes: {where: {UserId: userId}},
    }
  })

  const result = posts.map(post => {
    const { PostHashtags: hashtags, ...rest} = post;
    return {...rest, hashtags: hashtags.map(tag => tag.hashtag)};
  })

  return res.status(200).json(result);
});

//좋아요 순
router.get("/loadLikedPost", async function (req, res) {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }

    const posts = await Post.findAll({
      where,
      limit: 24,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Image,
          order: [["id", "DESC"]],
        },
        {
          model: Hashtag,
          order: [["createdAt", "DESC"]],
        },
        {
          model: User,
          as: "Likers",
        },
      ],
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
