const bcrypt = require("bcrypt");
const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post("/login", async (req, res) => {
  const {email, password} = req.body;

  const user = await prisma.users.findFirst({
    where: { email }
  })

  if (!user) {
    res.status(400).send({ data: null, message: "not authorized" });
    return;
  }

  if (!bcrypt.compareSync(password, user.password, 12)) {
    res.status(400).send({ data: null, message: "wrong" });
    return;
  }

  req.session.userId = user.id;
  req.session.name = user.name;
  res.json({data: user, message: "ok"});
});

router.get("/user",async function (req, res) {
  if (!req.session.userId) {
    res.status(201).json(null);
    return;
  }

  const data = await prisma.users.findFirst({
    where: { id: req.session.userId },
  })
  res.status(201).json({ data });
});

router.get("/logout", (req, res) => {
  if (!req.session.userId) {
    res.status(400).send({ data: null, message: "not authorized" });
    return;
  } 
  req.session.destroy(); // 세션 삭제
  res.json({ data: null, message: "ok" });
});

router.post("/signup", async function (req, res) {
  const { email, password, name } = req.body;
  const existingUser = await prisma.users.findFirst({
    where: { email },
  })
  if (existingUser) {
    res.status(400).send({ data: null, message: "already exist" });
    return;
  }

  //회원가입 성공
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await prisma.users.create({
    data: {
      email, name, password: hashedPassword,
    }
  })
  req.session.userId = newUser.id;
  req.session.name = newUser.name;
  res.status(201).json({
    userId: newUser.id,
    userName: newUser.name,
    message: "success",
  });
});

module.exports = router;