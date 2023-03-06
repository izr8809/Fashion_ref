const express = require ('express')
const next = require('next');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const prod = true;
const app = next({ prod});
const handle =app.getRequestHandler();
const {sequelize} = require('./models');
const passport = require('passport');
const { User } = require('./models');
const bcrypt = require('bcrypt');


sequelize.sync({ force: false})
  .then(() => {
    console.log("databse is connected");
  }).catch((err)=>{
    console.error(err);
  });

dotenv.config();

app.prepare().then( () => {


  const server = express();
  server.use(express.static(__dirname));
  server.use('/', express.static(path.join(__dirname, 'public')));
  // server.use('/', express.static(path.join(__dirname, '/')));

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRETKEY));
  server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      expires: 60000,
    },
    name: 'session-cookie',
  }));
  
  server.use(passport.initialize());
  server.use(passport.session());
  
  server.get('/', function(req, res){
    handle(req,res);
    req.session.user = 1;
    console.log(req.session.userId);
    console.log(req.sessionID);
    console.log(req.url, req.headers.cookie);
    // res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    const c = parseCookies(req.headers.cookie)
    // res.cookie('name', 'zerocho', { 
    //   expires: new Date(Date.now() + 900000),
    //   httpOnly: true, 
    //   secure: true,
    // });
    // res.clearCookie('name', 'zerocho', { httpOnly: true, secure: true });
    // res.sendFile(path.join(__dirname, '/server/pages/index.js'));
  });

  server.post('/login', async (req, res) => {
      // user 정보를 DB에서 조회
    const userInfo = await User.findOne({
      where: { email: req.body.email },
      // attributes: {
      //   exclude: ['password']
      // },
    });
    console.log(userInfo.password)
    let passwordmatch = bcrypt.compareSync(req.body.password, userInfo.password, 12);
    // userInfo 결과 존재 여부에 따른 응답
    if (!userInfo) {
      res.status(400).send({ data: null, message: 'not authorized' });
    } else if(passwordmatch){
      req.session.save(function () {  // req.session.save(callback)은 사용하지 않아도 됨
        req.session.userId = userInfo.id;
        res.json({ data: userInfo, message: 'ok' });
        // post 요청에 대한 응답이기에 {data:null}이 되므로, {data: userInfo} 무의미하여 생략 가능
      });
    }
  });

  server.post('/logout', (req, res) => {

    if (!req.session.userId) {
      res.status(400).send({ data: null, message: 'not authorized' });
    } else {
      req.session.destroy();      // 세션 삭제
      res.json({ data: null, message: 'ok' });
    }
  });

  server.post('/signups', async function(req, res){
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    console.log(req.body.password)
    console.log(hashedPassword)
    try{
    const userInfo = await User.findOne({
      where: { email: req.body.email, password: hashedPassword},
    });
    if (!userInfo) {
      //회원가입 성공
      const user = await User.create({
        email : req.body.email,
        name : req.body.name,
        password : hashedPassword,
      });
      const {password, ...userWithoutPassword} = user;
      console.log(userWithoutPassword)
      res.status(201).json({data : "success"})

    } else {
      //이미 존재하는 ID
      res.status(400).send({ data: null, message: 'already exist' });
    }
      
  } catch (err){
    console.error(err);
  }
})
  
  
  server.listen(3065, () => {
    console.log('서버 실행 중!');
  });
  
})



const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});