const express = require ('express')
const next = require('next');
const path = require('path');
const fs = require('fs');


const prod = true;

const app = next({ prod});
const handle =app.getRequestHandler();


app.prepare().then( () => {
  const server = express();
  server.use(express.static(__dirname));
  server.use('/', express.static(path.join(__dirname, 'public')));
  // server.use('/', express.static(path.join(__dirname, '/')));

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  
  
  server.get('/', function(req, res){
    handle(req,res);
    // res.sendFile(path.join(__dirname, '/server/pages/index.js'));
  });
  
  
  server.listen(3065, () => {
    console.log('서버 실행 중!');
  });
  
})

