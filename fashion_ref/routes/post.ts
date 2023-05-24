import express from 'express';
import multer from 'multer'
import session from "express-session";
import { error } from 'console';

export {}
const multerS3 = require("multer-s3");
const uuid = require("uuid");
const { User, Post, Hashtag, Sequelize, Workspace, Reference, Image } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();
const { S3Client } = require("@aws-sdk/client-s3");
const { REACT_LOADABLE_MANIFEST } = require("next/dist/shared/lib/constants");
const s3 = new S3Client({ region: process.env.AWS_S3_REGION });

type FieldName = { fieldName : string}
type FileNameCallback = (error: Error | null, {} : FieldName) => void

interface PostInfo {
    id : number,
    name : string,
    link : string,
    brand : string,
    category : string,
    season : string,
    userId : number,
    ReferenceId : number,
    Images : [
      id : number,
      postId : number,
      src : string,
      name : string,
    ][],
    Hashtags : [
      id : number,
      name : string,
    ][],
    Likers : [
      PostId : number,
      UserId : number,
    ][],
    References:[
      id : number,
      name : string,
      WorkspaceId : number,
    ][],
    reason? : string,
}

interface GetHashtagsSuccessResponse {
  hashtags : [
    id : number,
    name : string,
    References : [
      id : number,
      name : string,
      WorkspaceId : number,
    ],
  ],
}

interface AddPostSuccessResponse extends PostInfo{}

interface LoadPostSuccessResponse{
  posts : [ 
    PostInfo 
  ],
}

interface DeletePostSuccessResponse {
  PostId : number,
}

interface LikePostSuccessResponse {
  PostId : number,
}

interface UnlikePostSuccessResponse {
  PostId : number,
}

interface HashtagSearchSuccessResponse {
  posts : [ 
    PostInfo 
  ],
}

interface DuplicatePostSuccessResponse extends PostInfo{}

interface EditPostSuccessResponse extends PostInfo{}

interface GetUserPostSuccessResponse {
  posts : [
    PostInfo 
  ],
}

interface GetUserLikedPostSuccessResponse {
  posts : [
    PostInfo
  ]
}

interface FailureResponse {
  data: {
    message: string;
    error?: Error | any;
  }
}

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read",
    metadata: function (req : express.Request ,file :Express.Multer.File, cb :FileNameCallback ) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req : express.Request, file :Express.Multer.File, cb :FileNameCallback) {
      const [_, ext] :any = file.originalname.match(/(\.\w+)$/);
      const key = uuid.v4() + ext;
      cb(null, key);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

router.post("/getHashtags", async function (req : express.Request, res) {
  try {
    const where = {};
    const hashtags = await Hashtag.findAll({
      where,
      // limit: 10,
      order: [["createdAt", "DESC"]],
      include:[
        {
          model: Reference,
          where:{ id : parseInt(req.body.referenceId, 10)}
        }
      ]
    });
    const response : GetHashtagsSuccessResponse = {
      hashtags : hashtags,
    }
    res.status(200).json(response);
  } catch (error) {
    const response : FailureResponse = {
      data : {
        message : "getHashtagsFailure",
        error : error,
      },
    }
    res.status(400).send(response);
    console.error(error);
  }
});

router.post("/addPost", upload.array("image"), async (req, res) => {
  try {
    console.log(req.body.link)
    let hashtags = await req.body.hashtag.match(/#[^\s#]+/g);
    if (req.files) {
      const post = await Post.create({
        link: req.body.link,
        brand: req.body.brand,
        category: req.body.category,
        season: req.body.season,
        reason: req.body.reason,
        // name: req.body.userName,
        // UserId : req.body.userId,
        name: req.session.name,
        UserId: req.session.userId,
      });

      if (!hashtags) {
        hashtags = [];
      }

      hashtags.push("#" + req.body.category); //category
      hashtags.push("#" + req.body.season); //season
      hashtags.push("#" + req.body.brand); //brand
      hashtags.push("#" + req.session.name); // userName

      const result = await Promise.all(
        hashtags.map((tag : any) =>
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toUpperCase() },
          })
        )
      ); // [[노드, true], [리액트, true]]

      //hash 중복제거
      const editedResult = result.filter(
        (v, i) => result.findIndex((x) => x[0].name === v[0].name) === i
      );

      await post.addHashtags(editedResult.map((v) => v[0]));

      if (Array.isArray(req.files)) {
        // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
        const images = await Promise.all(
          req.files.map((image) =>
            Image.create({ src: image.location, name: image.originalname })
          )
        );
        await post.addImages(images);
      }

      const ref = await Reference.findOne({ 
        where: { id: parseInt(req.body.referenceId,10) }, 
      })

      await post.setReference(ref);


      ref.addHashtags(editedResult.map(v => v[0])); // 내일부터 다시 해 

      const madePost = await Post.findOne({
        where: { id: post.id },
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
          {
            model: Reference,
            order: [["createdAt", "DESC"]],
          }
        ],
      });
      const response : AddPostSuccessResponse = {
        id : madePost.id,
        name : madePost.name,
        link : madePost.link,
        brand : madePost.brand,
        category : madePost.category,
        season : madePost.season,
        userId : madePost.userId,
        ReferenceId : madePost.ReferenceId,
        Images : madePost.Images,
        Hashtags : madePost.Hashtags,
        Likers : madePost.Likers,
        References : madePost.References,
        reason : madePost.reason,
      }

      res.json(response);
    }
  } catch (err) {
    const response : FailureResponse = {
      data : {
        message : "addPostFailure",
        error : err,
      },
    }
    res.status(400).send(response);
    console.log(err);
  }
});

router.get("/loadPost", async function (req, res) {
  try {
    if (req.query.sort === "likes") {
      const limit = 24;
      const order = ((req.query.order || "desc") as string).toUpperCase();
      const page = parseInt(((req.query.page || "1") as string));
      const postsByLike = await Post.findAll({
        include: [
          {
            model: User,
            as: "Likers",
            attributes: [],
          },
        ],
        attributes: [
          [Sequelize.fn('COUNT', Sequelize.col('Likers.id')), 'likes'],
          "id",
          // ...Object.keys(Post.getAttributes()),
        ],
        subQuery: false,
        group: [Sequelize.col('Post.id')],
        order: [["likes", order]],
        offset: (page - 1) * limit,
        limit,
      });

      const postIds = postsByLike.map((e:any) => e.id);

      const posts = await Post.findAll({
        where: {ReferenceId: req.query.referenceId},
        include: [
          {
            model: Image,
            order: [["id", "DESC"]],
          },
          {
            model: Hashtag,
            order: [["createdAt", "DESC"]],
            attributes: ['name'],
            through: { attributes: [] }
          },
          {
            model: User,
            as: "Likers",
            attributes: ['name', 'id'],
            through: { attributes: [] }
          },
        ],
        order: Sequelize.literal(`FIELD(Post.id, ${postIds.join(',')})`)
      })

      const response : LoadPostSuccessResponse = {
        posts: posts,
      }
      res.status(200).json(response);
      return;
    }

    var where :any = { ReferenceId: req.query.referenceId };
    if (parseInt(req.query.lastId as string, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId as string, 10) };
    }
    const posts = await Post.findAll({
      where : where,
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
    
    const response : LoadPostSuccessResponse = {
      posts : posts,
    }
    res.status(200).json(response);

  } catch (error) {
    const response : FailureResponse = {
      data : {
        error: error,
        message : "loadPostFailure",
      }
    }
    res.status(201).json(response);
    console.error(error);
  }
});

router.post("/deletpost", async function (req, res) {
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.body.postId) },
      include: [
        {
          model: Hashtag,
        },
      ],
    });

    if (!post) {
      res.status(403).send("게시글이 없습니다.");
    } else {
      // 해시태그 가진 포스팅 하나 남은 경우 헤시태그제거
      const where = {};
      for (let i = 0; i < post.Hashtags.length; i++) {
        const postHasHashtag = await Post.findAll({
          where: {ReferenceId: req.body.referenceId},
          // limit: 24, limit 나중에 줘야함
          include: [
            {
              model: Hashtag,
              where: {
                name: post.Hashtags[i].name,
              },
            },
          ],
        });

        if (postHasHashtag.length == 1) {
          await Hashtag.destroy({
            where: {
              name: post.Hashtags[i].name,
            },
          });
        }
      }

      await Post.destroy({
        where: {
          id: parseInt(req.body.postId),
        },
      });
      const response : DeletePostSuccessResponse = {
        PostId : parseInt(req.body.postId, 10) 
      }
      res.status(200).json(response);
    }
  } catch (error) {
    const response : FailureResponse = {
      data :{
        message : "deletePostFailure",
        error: error,
      }
    }
    res.status(201).json(response)
    console.error(error);
  }
});

router.patch("/:postId/like", async (req : express.Request, res, next) => {
  // PATCH /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId) },
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.addLikers(req.session.userId);
    const response: LikePostSuccessResponse = {
      PostId : post.id
    }
    res.json(response);
  } catch (error) {
    const response :FailureResponse = {
      data : {
        message : "likePostFailure",
        error: error,
      }
    }
    res.status(201).json(response);
    console.error(error);
    next(error);
  }
});

router.delete("/:postId/unlike", async (req : express.Request, res, next) => {
  // PATCH /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId) },
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.removeLikers(req.session.userId);
    const response :UnlikePostSuccessResponse = {
      PostId : post.id,
    }
    res.json(response);
  } catch (error) {
    const response : FailureResponse = {
      data :{
        message: "unlikePostFailure",
        error: error,
      }
    }
    res.status(201).json(response);
    console.error(error);
    next(error);
  }
});

router.post("/hashtagSearch", async (req : express.Request, res) => {
  try {
    const hashtags = req.body.hashtags.match(/#[^\s#]+/g);
    var hashtagjson : any = [];
    for (let i = 0; i < hashtags.length; i++) {
      hashtagjson = [...hashtagjson, { name: hashtags[i].split("#")[1] }];
    }
    var where = {};
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
        {
          model: Reference,
          order: [["createdAt", "DESC"]],
          where: {id : parseInt(req.body.referenceId, 10)},
        }
      ],
    });

    var PostIdlist: any = [];
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
        {
          model: User,
          as: "Likers",
        },
        {
          model: Reference,
          order: [["createdAt", "DESC"]],
          where: {id : parseInt(req.body.referenceId, 10)},
        }
      ],
    });
    const response : HashtagSearchSuccessResponse = {
      posts : postsAllHashtags,
    }

    res.status(200).json(response);
  } catch (err) {
    const response : FailureResponse = {
      data : {
        message: "hashtagSearchFailure",
        error: err,
      }
    }
    res.status(201).json(response);

    console.log(err);
  }
});

router.post("/duplicate", async (req : express.Request, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.body.id) },
      include: [
        {
          model: Hashtag,
          order: [["createdAt", "DESC"]],
        },
        {
          model: Image,
          order: [["id", "DESC"]],
        },
        {
          model: Reference,
          order: [["createdAt", "DESC"]],
        }
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
      hashtags.map((tag : any) =>
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
        post.Images.map((image : any) => Image.create({ src: image.src }))
      );
      await newPost.addImages(images);
    } else {
      // 이미지를 하나
      const image = await Image.create({ src: post.Images[0].src });
      await newPost.addImages(image);
    }

    const ref = await Reference.findOne({ 
      where: { id: req.body.referenceId }, 
    })

    await newPost.setReference(ref);

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
        {
          model: Reference,
          order: [["createdAt", "DESC"]],
        }
      ],
    });
    
    const response : DuplicatePostSuccessResponse = {
      id : madePost.id,
      name : madePost.name,
      link : madePost.link,
      brand : madePost.brand,
      category : madePost.category,
      season : madePost.season,
      userId : madePost.userId,
      ReferenceId : madePost.ReferenceId,
      Images : madePost.Images,
      Hashtags : madePost.Hashtags,
      Likers : madePost.Likers,
      References : madePost.References,
      reason : madePost.reason,
    }

    res.json(response);
  } catch (error) {
    const response : FailureResponse = {
      data : {
        message: "duplicatePostFailure",
        error: error,
      }
    }
    res.status(201).json(response);
    console.error(error);
    next(error);
  }
});

router.post("/editPost", upload.array("image"), async (req : express.Request, res) => {
  // PATCH /post/1/like
  try {
    const updatePost = await Post.update(
      {
        link: req.body.link,
        brand: req.body.brand,
        category: req.body.category,
        season: req.body.season,
        reason: req.body.reason,
      },
      {
        where: { id: parseInt(req.body.postId, 10) },
      }
    );
    const post = await Post.findOne({
      where: { id: parseInt(req.body.postId, 10) },
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
          model: Reference,
          order: [["createdAt", "DESC"]],
        }
      ],
    });

    const ref = await Reference.findOne({
      where: { id: req.body.referenceId},
      include:[
      {
        model: Hashtag,
        order: [["createdAt", "DESC"]],
      },
    ]
    })

    //remove and add hashtags
    let hashtags = await post.getHashtags();
    await post.removeHashtags(hashtags.map((v :any) => v));
    await ref.removeHashtags(hashtags.map((v :any)=> v));

    //add hashtags again
    hashtags = (await req.body.hashtag.match(/#[^\s#]+/g)) || [];
    hashtags.push("#" + req.body.category); //category
    hashtags.push("#" + req.body.season); //season
    hashtags.push("#" + req.body.brand); //brand
    hashtags.push("#" + req.body.name); // userName
    const result = await Promise.all(
      hashtags.map((tag:any) =>
        Hashtag.findOrCreate({
          where: { name: tag.slice(1).toUpperCase() },
        })
      )
    ); // [[노드, true], [리액트, true]]

    //hash 중복제거
    const editedResult = result.filter(
      (v, i) => result.findIndex((x) => x[0].name === v[0].name) === i
    );

    await post.addHashtags(editedResult.map((v) => v[0]));
    await ref.addHashtags(editedResult.map((v) => v[0]));

    //remove imagespath
    let images = await post.getImages();
    await post.removeImages(images.map((v:any) => v));

    //add imagepath
    if (req.body.imagePath) {
      if (Array.isArray(req.body.imagePath)) {
        // 이미지를 여러 개
        const images = await Promise.all(
          req.body.imagePath.map((image: string) => Image.create({ src: image }))
        );
        await post.addImages(images);
      } else {
        // 이미지를 하나
        const image = await Image.create({ src: req.body.imagePath });
        await post.addImages(image);
      }
    }

    //add imagepath
    if (Array.isArray(req.files)) {
      // 이미지를 여러 개
      const images = await Promise.all(
        req.files.map((image) => Image.create({ src: image.location, name: image.originalname }))
      );
      await post.addImages(images);
    } else {
      // 이미지를 하나
      if(req.files){
        const image = await Image.create({ src: (req.files as any)[0].path });
        await post.addImages(image);
      }
    }

    //다시 한번 가져오기
    const newPost = await Post.findOne({
      where: { id: parseInt(req.body.postId, 10) },
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
          model:  Reference,
          order: [["createdAt", "DESC"]],
        }
      ],
    });
   
    const response : EditPostSuccessResponse = {
      id : newPost.id,
      name : newPost.name,
      link : newPost.link,
      brand : newPost.brand,
      category : newPost.category,
      season : newPost.season,
      userId : newPost.userId,
      ReferenceId : newPost.ReferenceId,
      Images : newPost.Images,
      Hashtags : newPost.Hashtags,
      Likers : newPost.Likers,
      References : newPost.References,
      reason : newPost.reason,
    }

    res.json(response); 

  } catch (error) {
    const response : FailureResponse = {
      data :{
        message: "editPostFailure",
        error : error,
      }
    }
    res.status(201).send(response);
    console.error(error);
  }
});

//개인이 작성한 포스트 가져오기
router.post("/user", async (req, res) => {
  //login 상태일때만
  if (req.session.userId) {
    try {
      var where = {};
      const posts = await Post.findAll({
        where: { UserId: req.session.userId, ReferenceId : req.body.referenceId },
        // limit: 24, limit 나중에 줘야함
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
          {
            model: User,
            as: "Likers",
          },
          // {
          //   model: Workspace,
          //   where:{ id: parseInt(req.body.workspaceId, 10)},
          //   order: [["createdAt", "DESC"]],
          // }
        ],
      });

      const response : GetUserPostSuccessResponse = {
        posts : posts,
      }
  
      res.json(response); 

    } catch (err) {
      const response : FailureResponse = {
        data : {
          message : "getUserPostFailure",
          error : err,
        }
      }
      res.status(201).send(response);
      console.log(err);
    }
  } else {
    
    const response : FailureResponse = {
      data : {
        message : "notLoggedIn",
      }
    }
    res.status(404).json(response);
  }
});

//개인이 좋아요한 포스트 가져오기
router.post("/userLiked", async (req, res) => {
  //login 상태일때만
  if (req.session.userId) {
    try {
      var where = {};
      const posts = await Post.findAll({
        where: { UserId: req.session.userId, ReferenceId : req.body.referenceId },
        // limit: 24, limit 나중에 줘야함
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
          {
            model: User,
            as: "Likers",
            where: {
              id: req.session.userId,
            },
          },
          {
            model: Reference,
            where:{ id: parseInt(req.body.referenceId, 10)},
            order: [["createdAt", "DESC"]],
          }
        ],
      });
      const response : GetUserLikedPostSuccessResponse = {
        posts : posts,
      }
      res.status(200).json(response);
    } catch (err) {
     
      const response : FailureResponse = {
        data : {
          message : "getUserLikedPostFailure",
          error : err,
        }
      }
      res.status(201).send(response);
      console.log(err);
    }
  } else {
    const response : FailureResponse = {
      data : {
        message : "notLoggedIn",
      }
    }
    res.status(404).json(response);
  }
});

//좋아요 순
// router.get("/loadLikedPost", async function (req, res) {
//   try {
//     const where = { id :{}};
//     if (parseInt(req.query.lastId as string, 10)) {
//       // 초기 로딩이 아닐 때
//       where.id = { [Op.lt]: parseInt(req.query.lastId as string, 10) };
//     }

//     const posts = await Post.findAll({
//       where,
//       limit: 24,
//       order: [["createdAt", "DESC"]],
//       include: [
//         {
//           model: Image,
//           order: [["id", "DESC"]],
//         },
//         {
//           model: Hashtag,
//           order: [["createdAt", "DESC"]],
//         },
//         {
//           model: User,
//           as: "Likers",
//         },
//         {
//           model: Workspace,
//           order: [["createdAt", "DESC"]],
//         }
//       ],
//     });

//     res.status(200).json(posts);
//   } catch (error) {
//     console.error(error);
//   }
// });

module.exports = router;
