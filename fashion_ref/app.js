const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const prod = true;
const app = next({ prod });
const handle = app.getRequestHandler();
const { sequelize } = require("./models");
const { User, Post, Hashtag, Image } = require("./models");
const passport = require("passport");
const dotenv = require('dotenv');
const cors = require("cors");
const path = require("path");
const fs = require("fs");

var bodyParser = require("body-parser");


//router
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

//seqeulize setting
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("databse is connected");
  })
  .catch((err) => {
    console.error(err);
  });

dotenv.config();


app.prepare().then(() => {
  const server = express();
  server.use(express.static(__dirname));
  server.use("/", express.static(path.join(__dirname, "public")));
  server.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
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
      secret: process.env.COOKIE_SECRETKEY,
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

  server.get("/dbfix", async function (req, res) {
    //한번 수정하고 지우기
    const where = {};
    // console.log(req.query.lastId)
    const posts = await Post.findAll({
      where,
      order: [["createdAt", "DESC"]],
    });
    for (let i = 0; i < posts.length; i++) {
      const hashtags = [];
      hashtags.push("#" + posts[i].name);
      hashtags.push("#" + posts[i].brand);
      const result = await Promise.all(
        hashtags.map((tag) =>
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toUpperCase() },
          })
        )
      ); // [[노드, true], [리액트, true]]
      await posts[i].addHashtags(result.map((v) => v[0]));
    }
  });

  server.get("/", function (req, res) {
    handle(req, res);
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

   
  server.use('/post', postRouter);
  server.use('/user', userRouter);

  server.listen(8080, () => {
    console.log("서버 실행 중!");
  });
});

// const parseCookies = (cookie = "") =>
//   cookie
//     .split(";")
//     .map((v) => v.split("="))
//     .reduce((acc, [k, v]) => {
//       acc[k.trim()] = decodeURIComponent(v);
//       return acc;
//     }, {});
