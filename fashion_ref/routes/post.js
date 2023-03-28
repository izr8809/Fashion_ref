const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { User, Post, Hashtag, Image } = require("../models");
const { Op } = require("sequelize");

const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      // 제로초.png
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // 제로초
      done(null, basename + "_" + new Date().getTime() + ext); // 제로초15184712891.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

router.get("/getHashtags", async function (req, res) {
  try {
    where = {};
    const hashtags = await Hashtag.findAll({
      where,
      // limit: 10,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(hashtags);
  } catch (error) {
    console.error(error);
  }
});
router.post("/addPost", upload.single("image"), async (req, res) => {
  try {
    // console.log(req)
    let hashtags = await req.body.hashtag.match(/#[^\s#]+/g);

    if (req.file) {
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
        hashtags.map((tag) =>
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toUpperCase() },
          })
        )
      ); // [[노드, true], [리액트, true]]
      await post.addHashtags(result.map((v) => v[0]));

      if (req.file) {
        const image = await Image.create({ src: req.file.path });
        await post.addImages(image);
        // if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
        //   const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
        //   await post.addImages(images);
        // } else { // 이미지를 하나만 올리면 image: 제로초.png
        // }
      }

      const madePost = await Post.findOne({
        where: { id: post.id },
        include: [
          {
            model: Image,
          },
          {
            model: Hashtag,
          },
          {
            model: User,
            as: "Likers",
          },
        ],
      });

      res.json(madePost);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/loadPost", async function (req, res) {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    // console.log(req.query.lastId)
    const posts = await Post.findAll({
      where,
      limit: 16,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Image,
        },
        {
          model: Hashtag,
        },
        {
          model: User,
          as: "Likers",
        },
      ],
    });
    // console.log(posts)
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
  }
});

router.post("/deletpost/:postId", async function (req, res) {
  try {
    await Post.destroy({
      where: {
        id: parseInt(req.params.postId),
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
  }
});

router.patch("/:postId/like", async (req, res, next) => {
  // PATCH /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId) },
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.addLikers(req.session.userId);
    res.json({ PostId: post.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId/unlike", async (req, res, next) => {
  // PATCH /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.postId) },
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.removeLikers(req.session.userId);
    res.json({ PostId: post.id });
  } catch (error) {
    console.error(error);
    next(error);
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
        },
        {
          model: Image,
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
        },
        {
          model: Image,
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
        },
        {
          model: Image,
        },
      ],
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    let hashtags = post.Hashtags;

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
    
    const result = await Promise.all(
      hashtags.map((tag) =>
        Hashtag.findOrCreate({
          where: { name: tag.name },
        })
      )
    ); // [[노드, true], [리액트, true]]
    await newPost.addHashtags(result.map((v) => v[0]));

    const image = await Image.create({ src: post.Images[0].src }); //이미지 여러장일 떄 이거 바꿔야
    await newPost.addImages(image);
    // if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
    //   const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
    //   await post.addImages(images);
    // } else { // 이미지를 하나만 올리면 image: 제로초.png
    //

    const madePost = await Post.findOne({
      where: { id: newPost.id },
      include: [
        {
          model: Image,
        },
        {
          model: Hashtag,
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

module.exports = router;
