const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const prod = true;
const app = next({ prod });
const handle = app.getRequestHandler();
const { sequelize } = require("./models");
const {
  User,
  Post,
  Hashtag,
  Image,
  Workspace,
  Reference,
} = require("./models");
const passport = require("passport");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

var bodyParser = require("body-parser");

//router
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const workspaceRouter = require("./routes/workspace");

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
    const where = {};
    const ref = await Reference.findOne({
      where: { id: 1 },
    });
    const hashtags = await Hashtag.findAll({
      where,
    });
    await ref.addHashtags(hashtags.map((v) => v[0]));
  });

  server.use("/post", postRouter);
  server.use("/user", userRouter);
  server.use("/workspace", workspaceRouter);

  server.get("/*", function (req, res) {
    handle(req, res);
  });

  server.listen(8080, () => {
    console.log("서버 실행 중!");
  });
});
