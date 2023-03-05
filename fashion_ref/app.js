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


sequelize.sync({ force: false})
  .then(() => {
    console.log("databse is connected");
  }).catch((err)=>{
    console.error(err);
  });

dotenv.config();

// const mysql = require('mysql');  // mysql 모듈 로드
// const conn = {  // mysql 접속 설정
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'qwe123!@',
//     database: 'REF'
// };
 
// var connection = mysql.createConnection(conn); // DB 커넥션 생성
// connection.connect();   // DB 접속

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
    },
    name: 'session-cookie',
  }));
  
  
  server.get('/', function(req, res){
    handle(req,res);
    req.session.user = 1;
    console.log(req.session);
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



  server.post('/signups', function(req, res){
    console.log(req.body);
    console.log("!");
    res.json({
      'ok' : true
    })
  })

  server.post('/login',  (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, async (loginErr) => {
        if (loginErr) {
          console.error(loginErr);
          return next(loginErr);
        }
        const fullUserWithoutPassword = await User.findOne({
          where: { id: user.id },
          attributes: {
            exclude: ['password']
          },
          include: [{
            model: Post,
            attributes: ['id'],
          }, {
            model: User,
            as: 'Followings',
            attributes: ['id'],
          }, {
            model: User,
            as: 'Followers',
            attributes: ['id'],
          }]
        })
        return res.status(200).json(fullUserWithoutPassword);
      });
    })(req, res, next);
  });
  
  
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