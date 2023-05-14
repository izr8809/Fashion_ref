const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bcrypt = require("bcrypt");
const { User, Post, Hashtag, Image, Workspace, Reference, SavedHashs, Notification} = require("../models");
const { Op } = require("sequelize");
const { userInfo } = require('os');

const router = express.Router();



router.post("/login", async (req, res) => {
  // user 정보를 DB에서 조회
  // console.log("email" +req.body.email)
  let email = req.body.email;
  let password = req.body.password;

  let passwordmatch;
  const userInfo = await User.findOne({
    where: { email: email },
    include: [
      {
        model: Workspace,
        order: [["id", "DESC"]],
        include:[
          {
            model: Reference,
            order: [["createdAt", "DESC"]],
            include:[{
              model: Hashtag,
              order: [["createdAt", "DESC"]],
            },{
              model : SavedHashs,
              order: [["createdAt", "DESC"]],
            }]
          }
        ]
      },
      {
        model: Notification,
        order:[["createdAt", "DESC"]],
      }
    ]

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
      res.json(userInfo);
      // post 요청에 대한 응답이기에 {data:null}이 되므로, {data: userInfo} 무의미하여 생략 가능
    });
  } else {
    res.status(400).send({ data: null, message: "wrong" });
  }
});

//getUserinfo
router.get("/user",async function (req, res) {
  if (req.session.userId) {
    const userInfo = await User.findOne({
      where: { id: req.session.userId },
      // attributes: {
      //   exclude: ['password']
      // },
    include: [
      {
        model: Workspace,
        order: [["id", "DESC"]],
        include:[
          {
            model: Reference,
            order: [["createdAt", "DESC"]],
            include:[{
              model: Hashtag,
              order: [["createdAt", "DESC"]],
            },{
              model : SavedHashs,
              order: [["createdAt", "DESC"]],
            }]
          }
        ]
      },
      {
        model: Notification,
        order:[["createdAt", "DESC"]],
      }
    ]
    });
    res.json(userInfo);
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

router.post("/signup", async function (req, res) {
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
      //private workspace ==> ws_private_{id}
      const workspace = await Workspace.create({
        name : `private_${user.id}`,
        isPremium : 0,
        code :  req.body.name +  user.id
      })
      await user.addWorkspace(workspace);
      
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


router.post("/addWorkspace", async(req, res) => {

  try{
    if(req.body.name){
      const workspace = await Workspace.findOne({
        where:{ name : req.body.name}
      })
      if(workspace){
        res.status(400).send({data: null, message: "already exist"})
      }else{
        const newWorkspace = await Workspace.create({
          name : req.body.name,
          isPremium : false,
          code : req.body.name + Math.floor(Math.random()*10000)
        })
        const user = await User.findOne({
          where:{ id : req.session.userId}
        })
    
        await newWorkspace.addUser(user);
        await newWorkspace.addWorkspaceAdministrators(user);
    
        const userInfo = await User.findOne({
          where: { id: req.session.userId },
          include: [
            {
              model: Workspace,
              order: [["id", "DESC"]],
              include:[
                {
                  model: Reference,
                  order: [["createdAt", "DESC"]],
                  include:[{
                    model: Hashtag,
                    order: [["createdAt", "DESC"]],
                  },{
                    model : SavedHashs,
                    order: [["createdAt", "DESC"]],
                  }]
                }
              ]
            },
          ]
        });
        res.json(userInfo);
      }
    }else{
      res.status(400).send({data: null, message: "Error"})
    }
  }catch(err){
      console.log(err);
      res.status(400).send({data:null, error:err})
    }
  

});

router.post("/requestPermission", async(req, res) => {

  try{

    const fromUserId = req.session.userId;
    const brandCode = req.body.code;
 
    const user = await User.findOne({
      where:{id : fromUserId}
    }) 
    const userName = user.name;
    const content = userName + "님이 팀스페이스에 참여하고 싶어합니다";

    const ws = await Workspace.findOne({
      where: {code : brandCode},
      include:[
        {
          model: User,
          as : "WorkspaceAdministrators"
        }
      ]
    })

    if(ws){
      const administrator = await ws.getWorkspaceAdministrators();
      const noti = await Notification.create({
        From: fromUserId,
        content : content,
        workspaceId : ws.id,
        notitype : 1,
      })
      noti.addUser(administrator.map((v) => v))
      res.send({message:"success"}) 
    }else{
      res.status(400).send({message : "no_ws"})
    }
  }
  catch(err){
    console.log(err)
    res.status(400).send({error:err})
  }
});

router.post("/requestConfirm", async(req, res) => {
  try{

    const noti = await Notification.findOne({
      where :{id : req.body.id}
    })

    const ws = await Workspace.findOne({
      where : { id : noti.workspaceId }
    })

    const fromUser = await User.findOne({
      where : {id : noti.From}
    })

    await ws.addUser(fromUser)

    const content = ws.name + " 가입이 승인되었습니다"
    const newNoti = await Notification.create({
      From : req.session.userId,
      content : content,
      workspaceId : -1,
      notitype : 2,
    })
    await newNoti.addUser(fromUser);
    await Notification.destroy({
      where:{id : noti.id}
      });

    const userInfo = await User.findOne({
      where: { id: req.session.userId },
      include: [
        {
          model: Workspace,
          order: [["id", "DESC"]],
          include:[
            {
              model: Reference,
              order: [["createdAt", "DESC"]],
              include:[{
                model: Hashtag,
                order: [["createdAt", "DESC"]],
              },{
                model : SavedHashs,
                order: [["createdAt", "DESC"]],
              }]
            }
          ]
        },
        {
          model: Notification,
          order: [["createdAt", "DESC"]],
        }
      ]
    })
    res.json(userInfo);
  }
  catch(err){
    console.log(err)
    res.status(400).send({error:err})
  }
});

router.post("/requestDeny", async(req, res) => {
  const noti = await Notification.findOne({
    where :{id : req.body.id}
  })

  const ws = await Workspace.findOne({
    where : { id : noti.workspaceId }
  })

  const fromUser = await User.findOne({
    where : {id : noti.From}
  })
  const content = ws.name + " 가입이 거절되었습니다"
  const newNoti = await Notification.create({
    From : req.session.userId,
    content : content,
    workspaceId : -1,
    notitype : 3,
  })
  await newNoti.addUser(fromUser);
  await Notification.destroy({
    where:{id : noti.id}
    });

  const userInfo = await User.findOne({
    where: { id: req.session.userId },
    include: [
      {
        model: Workspace,
        order: [["id", "DESC"]],
        include:[
          {
            model: Reference,
            order: [["createdAt", "DESC"]],
            include:[{
              model: Hashtag,
              order: [["createdAt", "DESC"]],
            },{
              model : SavedHashs,
              order: [["createdAt", "DESC"]],
            }]
          }
        ]
      },
      {
        model: Notification,
        order: [["createdAt", "DESC"]],
      }
    ]
  })
  res.json(userInfo);
  try{
  }
  catch(err){
    console.log(err)
    res.status(400).send({error:err})
  }
});


router.post("/deleteNoti", async(req, res) => {
  const noti = await Notification.findOne({
    where :{id : req.body.id}
  })
  await Notification.destroy({
    where:{id : noti.id}
    });

  const userInfo = await User.findOne({
    where: { id: req.session.userId },
    include: [
      {
        model: Workspace,
        order: [["id", "DESC"]],
        include:[
          {
            model: Reference,
            order: [["createdAt", "DESC"]],
            include:[{
              model: Hashtag,
              order: [["createdAt", "DESC"]],
            },{
              model : SavedHashs,
              order: [["createdAt", "DESC"]],
            }]
          }
        ]
      },
      {
        model: Notification,
        order: [["createdAt", "DESC"]],
      }
    ]
  })
  res.json(userInfo);
  try{
  }
  catch(err){
    console.log(err)
    res.status(400).send({error:err})
  }
});

module.exports = router;