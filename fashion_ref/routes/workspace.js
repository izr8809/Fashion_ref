const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { User, Post, Hashtag, Image, Workspace,Reference, SavedHashs } = require("../models");
const { Op } = require("sequelize");
const { send } = require("process");
const { restore } = require("../models/hashtag");

const router = express.Router();

// router.post("/addTag", async (req, res) => {
//   //find workspace
//   try {
//     const workspace = await Workspace.findOne({
//       where: { id: parseInt(req.body.workspaceId, 10) },
//       include: [
//         {
//           model: Hashtag,
//           order: [["createdAt", "DESC"]],
//         },
//       ],
//     });

//     let hashtags = await req.body.hashtags.match(/#[^\s#]+/g);
//     const result = await Promise.all(
//       hashtags.map((tag) =>
//         Hashtag.findAll({
//           where: { name: tag.slice(1).toUpperCase() },
//         })
//       )
//     ); // 

//     //hash 중복제거
//     const editedResult = result.filter(
//       (v, i) => result.findIndex((x) => x[0].name === v[0].name) === i
//     );
//     //해시태그 추가
//     await workspace.addHashtags(editedResult.map((v) => v[0]));

//     //다시 한번 가져오기
//     const newWorkspace = await Workspace.findOne({
//         where: { id: parseInt(req.body.workspaceId, 10) },
//       include: [
//         {
//           model: Hashtag,
//           order: [["createdAt", "DESC"]],
//         },
//       ],
//     });
//     res.json({ workspaceInfo: newWorkspace, workspaceId: newWorkspace.id });
//   } catch (err) {
//     res.status(400).send({ data: null, message: "wrong" });
//   }
// });

// router.post("/deleteTag", async (req, res) => {
//   //find workspace
//   try {
//     let hashtag = req.body.hashtag;
//     const workspace = await Workspace.findOne({
//       where: { id: parseInt(req.body.workspaceId, 10) },
//       include: [
//         {
//           model: Hashtag,
//           order: [["createdAt", "DESC"]],
//         },
//       ],
//     });

//     //get Hashtag
//     let hashtags = await workspace.getHashtags()
//     await workspace.removeHashtags(hashtags.filter((v) => v.name == hashtag));

//     //다시 한번 가져오기
//     const newWorkspace = await Workspace.findOne({
//       where: { id: parseInt(req.body.workspaceId, 10) },
//     include: [
//       {
//         model: Hashtag,
//         order: [["createdAt", "DESC"]],
//       },
//     ],
//   });

//    res.json({ workspaceInfo : newWorkspace}) 
    
//   } catch (err) {
//     res.status(400).send({ data: null, message: "wrong" });
//   }
// });



router.post("/addReference", async (req, res) => {
  try {
    console.log("here")
    console.log(req.body.workspaceId)

      const ws = await Workspace.findOne({ 
        where: { id: parseInt(req.body.workspaceId,10) }, 
      })
      
      const reference = await Reference.create({
          name : req.body.name,
      });

      await reference.setWorkspace(ws);

      const updatedWs = await Workspace.findOne({ 
          where: { id: parseInt(req.body.workspaceId,10) }, 
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
              },
          ]
        }) 

      res.json(updatedWs);
    
  } catch (err) {
    console.log(err);
  }
});


router.post("/addReferenceTag", async (req, res) => {
try {
    const reference = await Reference.findOne({
        id : req.body.refernceId,
    });

    const newSavedHashs = await SavedHashs.create({
        hashs : req.body.tags,
    });

    await reference.addSavedHashs(newSavedHashs);

    const updatedWs = await Workspace.findOne({ 
        where: { id: req.body.workspaceId }, 
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
            },
        ]
      }) 

    res.json(updatedWs);
  
} catch (err) {
  console.log(err);
  res.status(400).send({data : null})
}
});

router.post("/deleteSavedtags", async (req, res)=>{
  try{
   
    const savedHash = await SavedHashs.findOne({
      id : req.body.id,
    }); 

    if(savedHash){
      await SavedHashs.destroy({
        where :{ id : req.body.id}
      })
    }

    const ws = await Workspace.findOne({
      where: { id: req.body.workspaceId }, 
      include:[
          {
            model: Reference,
            order: [["createdAt", "DESC"]],
            include:[
              {
                model :SavedHashs,
                order: [["createdAt", "DESC"]],
              }
            ]
          },
      ]
    })


    res.json(ws)

  }catch(err){
    console.log(err)
    res.status(400).send({data : null});
  }
})
module.exports = router;
