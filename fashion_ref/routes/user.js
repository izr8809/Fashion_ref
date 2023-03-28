const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bcrypt = require("bcrypt");
const { User, Post, Hashtag, Image } = require("../models");
const { Op } = require("sequelize");

const router = express.Router();



router.post("/login", async (req, res) => {
  // user 정보를 DB에서 조회
  // console.log("email" +req.body.email)

  let email = req.body.email;
  let password = req.body.password;

  let passwordmatch;
  const userInfo = await User.findOne({
    where: { email: email },
    // attributes: {
    //   exclude: ['password']
    // },
  });

  if (userInfo) {
    passwordmatch = bcrypt.compareSync(password, userInfo.password, 12);
    // console.log("passwordamtch");
  }

  // userInfo 결과 존재 여부에 따른 응답
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
  } else {
    res.status(400).send({ data: null, message: "wrong" });
  }
});

router.get("/user",async function (req, res) {
  if (req.session.userId) {

    const userInfo = await User.findOne({
      where: { id: req.session.userId },
      // attributes: {
      //   exclude: ['password']
      // },
    });

    res.status(201).json({ data: userInfo });
  } else {
    res.status(201).json(null);
  }
});

router.get("/logout", (req, res) => {
  if (!req.session.userId) {
    res.status(400).send({ data: null, message: "not authorized" });
  } else {
    req.session.destroy(); // 세션 삭제
    res.json({ data: null, message: "ok" });
  }
});

router.post("/signups", async function (req, res) {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  try {
    const userInfo = await User.findOne({
      where: { email: req.body.email },
    });
    if (!userInfo) {
      //회원가입 성공
      const user = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword,
      });
      const { password, ...userWithoutPassword } = user;
      req.session.userId = user.id;
      req.session.name = user.name;
      res.status(201).json({
        userId: userWithoutPassword.dataValues.id,
        userName: userWithoutPassword.dataValues.name,
        message: "success",
      });
    } else {
      //이미 존재하는 ID
      res.status(400).send({ data: null, message: "already exist" });
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;