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

  // server.get("/dbfix", async function (req, res) {
  //   //한번 수정하고 지우기
    
  //   const where = {};
  //   const hashtags = await Hashtag.findAll({
  //     where,
  //     order: [["createdAt", "DESC"]],
  //   });
  //   // console.log(req.query.lastId)
  //   for (let i = 0; i < hashtags.length; i++) {
  //       hashtags.map((tag) =>
  //          Hashtag.update(
  //           {
  //             name: tag.name.replace(" ", "")
  //           },
  //           {
  //           where: { 
  //            id: tag.id
  //           },
  //         })
  //       )
  //   }
  // });

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
