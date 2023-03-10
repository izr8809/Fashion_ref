const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { User ,Post } = require('../models');

const router = express.Router();

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}


router.post('/addpost', async (req,res)=>{

  try{
    const post = await Post.create({
      email : req.body.email,
      name : req.body.name,
      password : hashedPassword,
    });

  }
  catch(err){
    console.log(err);
  }
})