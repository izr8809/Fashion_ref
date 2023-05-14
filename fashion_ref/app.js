const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const prod = true;
// const next = require("next");
// const app = next({ prod });
// const handle = app.getRequestHandler();
const passport = require("passport");
const dotenv = require('dotenv');
const cors = require("cors");
const path = require("path");

var bodyParser = require("body-parser");


//router
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

dotenv.config();

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
server.use('/post', postRouter);
server.use('/user', userRouter);

server.listen(8080, () => {
  console.log("서버 실행 중!");
});