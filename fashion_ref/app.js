const express = require("express");
const next = require("next");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const prod = true;
const app = next({ prod });
var bodyParser = require("body-parser");
const handle = app.getRequestHandler();
const { sequelize } = require("./models");
const passport = require("passport");
const { User, Post, Hashtag, Image } = require("./models");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const cors = require('cors');
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("databse is connected");
  })
  .catch((err) => {
    console.error(err);
  });

dotenv.config();

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

app.prepare().then(() => {
  const server = express();
  server.use(express.static(__dirname));
  server.use("/", express.static(path.join(__dirname, "public")));
  // server.use('/', express.static(path.join(__dirname, '/')));
  server.use(cors({
    origin: '*'
}));
  server.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRETKEY));
  server.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
      },
      name: "session-cookie",
    })
  );

  server.use(passport.initialize());
  server.use(passport.session());

  server.get("/", function (req, res) {
    handle(req, res);
    console.log(req.session.userId);
    console.log(req.sessionID);
    console.log(req.url, req.headers.cookie);
    // res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    // const c = parseCookies(req.headers.cookie)
    // res.cookie('name', 'zerocho', {
    //   expires: new Date(Date.now() + 900000),
    //   httpOnly: true,
    //   secure: true,
    // });
    // res.clearCookie('name', 'zerocho', { httpOnly: true, secure: true });
    // res.sendFile(path.join(__dirname, '/server/pages/index.js'));
  });
  server.get("/logincheck", function (req, res) {
    if (req.session.userId) {
      res.status(201).json({ login: true });
    } else {
      res.status(201).json({ login: false });
    }
    console.log(req.session.userId);
    console.log(req.sessionID);
    console.log(req.url, req.headers.cookie);
  });

  server.post("/login", async (req, res) => {
    // user 정보를 DB에서 조회
    let passwordmatch;
    const userInfo = await User.findOne({
      where: { email: req.body.email },
      // attributes: {
      //   exclude: ['password']
      // },
    });

    if(userInfo){
      passwordmatch = bcrypt.compareSync(
        req.body.password,
        userInfo.password,
        12
      );
      console.log("passwordamtch")
    }
    
    // userInfo 결과 존재 여부에 따른 응답
    console.log(passwordmatch)
    if (!userInfo) {
      res.status(400).send({ data: null, message: "not authorized" });
    } else if (passwordmatch) {
      req.session.save(function () {
        // req.session.save(callback)은 사용하지 않아도 됨
        req.session.userId = userInfo.id;
        req.session.name = userInfo.name;
        res.json({ data: userInfo, message: "ok" });
        // post 요청에 대한 응답이기에 {data:null}이 되므로, {data: userInfo} 무의미하여 생략 가능
      });
    } else{
      res.status(400).send({ data: null, message: "wrong" });
    }
  });

  server.get("/logincheck", function (req, res) {
    if (req.session.userId) {
      res.status(201).json({ login: true });
    } else {
      res.status(201).json({ login: false });
    }
    console.log(req.session.userId);
    console.log(req.sessionID);
    console.log(req.url, req.headers.cookie);
  });

  server.get("/userInfo", function (req, res) {
    if (req.session.userId) {
      res.status(201).json({ id: req.session.id, name: req.session.name });
    } else {
      res.status(400).send({ data: null, message: "not authorized" });
    }
  });

  server.get("/logout", (req, res) => {
    console.log("logout")
    console.log(req.session.userId)
    if (!req.session.userId) {
      res.status(400).send({ data: null, message: "not authorized" });
    } else {
      req.session.destroy(); // 세션 삭제
      res.json({ data: null, message: "ok" });
    }
  });

  server.post("/signups", async function (req, res) {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    console.log(req.body.password);
    console.log(hashedPassword);
    try {
      const userInfo = await User.findOne({
        where: { email: req.body.email },
      });
      console.log("uerInfo" + userInfo)
      if (!userInfo) {
        console.log("uerInfo" + userInfo)
        //회원가입 성공
        const user = await User.create({
          email: req.body.email,
          name: req.body.name,
          password: hashedPassword,
        });
        const { password, ...userWithoutPassword } = user;
        console.log(userWithoutPassword);
        req.session.userId = user.id;
        req.session.name = user.name;
        res.status(201).json({ data: "success" });
      } else {
        //이미 존재하는 ID
        res.status(400).send({ data: null, message: "already exist" });
      }
    } catch (err) {
      console.error(err);
    }
  });

  // server.post('/addpost', async (req,res)=>{

  //   try{
  //     const post = await Post.create({
  //       email : req.body.email,
  //       name : req.body.name,
  //       password : hashedPassword,
  //     });

  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // })
  // server.use('/post', postrouter)
  server.post("/uploads", upload.single("image"), async (req, res) => {
    console.log("id" + req.session.userId);
    console.log("--------------------------===-===========================================================");

    try{
    let hashtags = req.body.hashtag.match(/#[^\s#]+/g);

    const post = await Post.create({
      UserId: req.session.usedId,
      link: req.body.link,
      brand: req.body.brand,
      category: req.body.category,
      season: req.body.season,
      name: req.session.name,
      reason : req.body.reason,
    });
    
    await post.addHashtags(result.map((v) => v[0]));
   
    if (!hashtags){
      hashtags = []
    }  
      
    hashtags.push("#"+req.body.category);
    hashtags.push("#"+req.body.season);
    const result = await Promise.all(
      hashtags.map((tag) =>
        Hashtag.findOrCreate({
          where: { name: tag.slice(1).toUpperCase() },
        })
      )
    ); // [[노드, true], [리액트, true]]
    await post.addHashtags(result.map((v) => v[0]));
    
    console.log(req.file);
    if (req.file) {
      const image = await Image.create({ src: req.file.path });
      await post.addImages(image);
      // if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
      //   const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
      //   await post.addImages(images);
      // } else { // 이미지를 하나만 올리면 image: 제로초.png
      // }
    }
  } catch (err){
    console.log(err);
  }
  });

  server.get("/loadpost", async function (req, res) {
    try {
      const where = {};
      // if (parseInt(req.query.lastId, 10)) {
      //   // 초기 로딩이 아닐 때
      //   where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
      // }
      const posts = await Post.findAll({
        where,
        // limit: 10,
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: Image,
          },
          {
            model: Hashtag,
          },
        ],
      });
      // console.log(posts)
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
    }
  });
  server.post("/deletpost/:postId", async function(req,res) {
    try {
      await Post.destroy({
        where: {
          id: req.params.postId,
        },
      });
      res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
    } catch (error) {
      console.error(error);
    }
  });

  server.post("/hashtagsearch", async (req, res) => {
    try{
    const hashtags = req.body.hashtags.match(/#[^\s#]+/g);
    // console.log("--------------------------");
    // console.log("hash" + hashtags[0].split("#")[1]);
    // console.log("hashtags length" + hashtags.length)
    var hashtagjson = []
    for (let i =0; i< hashtags.length; i++){
      hashtagjson =[
        ...hashtagjson,
        {name : hashtags[i].split("#")[1]}
      ]
    }


    where = {};
    const posts = await Post.findAll({
      where: {
        // season: req.body.season,
        // category: req.body.category,
      },
      limit: 100,
      order: [['createdAt', 'DESC']],
      include: [{
        model: Hashtag,
        where: { 
          [Op.or]: hashtagjson,
      },
    },{
      model : Image,
    },]
      },
    );

    var PostIdlist =[]
    for(let i =0 ; i< posts.length; i++){
      if(posts[i].Hashtags.length == hashtags.length)
      PostIdlist =[
          ...PostIdlist,
          {"id" : posts[i].id},
        ]
    }
    console.log("########################")
    console.log(PostIdlist)
    where = {};
    const postsAllHashtags = await Post.findAll({
      where: {
        [Op.or] : PostIdlist,
        // season: req.body.season,
        // category: req.body.category,
      },
      limit: 100,
      order: [['createdAt', 'DESC']],
      include: [{
        model: Hashtag,
    },{
      model : Image,
    },]
      },
    );
    console.log(postsAllHashtags)

    // console.log("--------------------------");
    // console.log(Postlist)
    res.status(200).json(postsAllHashtags);
    } catch (err) {
      console.log(err)
    }// const postid = await Hashtag.findAll({
    //   where : { name : [hashtags]}
    // })

    // const posts = await Post.findAll({
    //   where,
    //   // limit: 10,
    //   order: [
    //     ['createdAt', 'DESC'],
    //   ],
    //   include: [{
    //     model: Image,
    //   },{
    //     model : Hashtag,
    //   }]
    // });
  });

  server.listen(8080, () => {
    console.log("서버 실행 중!");
  });
});

const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
