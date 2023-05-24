import express from 'express';
import multer from 'multer';
import session from 'express-session';

export {};
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const {
  User,
  Post,
  Hashtag,
  Image,
  Workspace,
  Reference,
  SavedHashs,
} = require('../models');
const { Op } = require('sequelize');
const { send } = require('process');
const { restore, update } = require('../models/hashtag');

const router = express.Router();

interface WorkspaceInfo {
  id: number;
  name: string;
  isPremium: number;
  code: string;
  References: [
    id: number,
    name: string,
    WorkspaceId: number,
    Hashtags: [id: number, name: string],
    SavedHashs: [id: number, hashs: string]
  ][];
}

interface AddReferenceSuccessResponse extends WorkspaceInfo {}

interface AddReferenceTagSuccessResponse extends WorkspaceInfo {}

interface AddAdministratorsSuccessResponse extends WorkspaceInfo {
  WorkspaceUser: [];
  WorkspaceAdministrators: [];
}

interface DeleteAdministratorsSuccessResponse extends WorkspaceInfo {
  WorkspaceUser: [];
  WorkspaceAdministrators: [];
}

interface DeleteMemeberSuccessResponse extends WorkspaceInfo {
  WorkspaceUser: [];
  WorkspaceAdministrators: [];
}

interface ReferenceClickSuccessResponse {
  referenceId: number;
}

interface ChangeWorkspaceSuccessResponse {
  workspaceId: number;
}

interface FailureResponse {
  data: {
    message: string;
    error?: Error | any;
  };
}

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

router.post('/addReference', async (req, res) => {
  try {
    const ws = await Workspace.findOne({
      where: { id: parseInt(req.body.workspaceId, 10) },
    });

    const reference = await Reference.create({
      name: req.body.name,
    });

    await reference.setWorkspace(ws);

    const updatedWs = await Workspace.findOne({
      where: { id: parseInt(req.body.workspaceId, 10) },
      include: [
        {
          model: Reference,
          order: [['createdAt', 'ASC']],
          include: [
            {
              model: Hashtag,
              order: [['createdAt', 'DESC']],
            },
            {
              model: SavedHashs,
              order: [['createdAt', 'DESC']],
            },
          ],
        },
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });
    const response: AddReferenceSuccessResponse = {
      id: updatedWs.id,
      name: updatedWs.name,
      isPremium: updatedWs.isPremium,
      code: updatedWs.code,
      References: updatedWs.References,
    };

    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'addReferenceFailure',
        error: err,
      },
    };
    res.status(401).send(response);
    console.log(err);
  }
});

router.post('/referenceClick', async (req, res) => {
  try {
    const updatedUser = await User.update(
      {
        lastWorkspaceId: req.body.workspaceId,
        lastReferenceId: req.body.referenceId,
      },
      {
        where: { id: req.session.userId },
      }
    );

    const response: ReferenceClickSuccessResponse = {
      referenceId: req.body.referenceId,
    };
    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'referenceClickFailure',
        error: err,
      },
    };
    res.status(401).send(response);
    console.log(err);
  }
});

router.post('/addReferenceTag', async (req, res) => {
  try {
    const reference = await Reference.findOne({
      id: req.body.refernceId,
    });

    const newSavedHashs = await SavedHashs.create({
      hashs: req.body.tags,
    });

    await reference.addSavedHashs(newSavedHashs);

    const updatedWs = await Workspace.findOne({
      where: { id: req.body.workspaceId },
      include: [
        {
          model: Reference,
          order: [['createdAt', 'ASC']],
          include: [
            {
              model: Hashtag,
              order: [['createdAt', 'DESC']],
            },
            {
              model: SavedHashs,
              order: [['createdAt', 'DESC']],
            },
          ],
        },
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });

    const response: AddReferenceTagSuccessResponse = {
      id: updatedWs.id,
      name: updatedWs.name,
      isPremium: updatedWs.isPremium,
      code: updatedWs.code,
      References: updatedWs.References,
    };

    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'addReferenceTagFailure',
        error: err,
      },
    };
    res.status(401).send(response);
    console.log(err);
  }
});

router.post('/deleteSavedtags', async (req, res) => {
  try {
    const savedHash = await SavedHashs.findOne({
      id: req.body.id,
    });

    if (savedHash) {
      await SavedHashs.destroy({
        where: { id: req.body.id },
      });
    }

    const ws = await Workspace.findOne({
      where: { id: req.body.workspaceId },
      include: [
        {
          model: Reference,
          order: [['createdAt', 'ASC']],
          include: [
            {
              model: SavedHashs,
              order: [['createdAt', 'DESC']],
            },
          ],
        },
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });

    const response: AddReferenceSuccessResponse = {
      id: ws.id,
      name: ws.name,
      isPremium: ws.isPremium,
      code: ws.code,
      References: ws.References,
    };

    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'deleteSavedTagsFailure',
        error: err,
      },
    };
    res.status(401).send(response);
    console.log(err);
  }
});

router.post('/addAdminUser', async (req, res) => {
  try {
    const ws = await Workspace.findOne({
      where: { id: req.body.workspaceId },
    });
    const targetUser = await User.findOne({
      where: { id: req.body.targetUserId },
    });

    await ws.addWorkspaceAdministrators(targetUser);

    const updatedWs = await Workspace.findOne({
      where: { id: req.body.workspaceId },
      include: [
        {
          model: Reference,
          order: [['createdAt', 'ASC']],
          include: [
            {
              model: Hashtag,
              order: [['createdAt', 'DESC']],
            },
            {
              model: SavedHashs,
              order: [['createdAt', 'DESC']],
            },
          ],
        },
        {
          model: User,
          order: [['createdAt', 'DESC']],
        },
        {
          model: User,
          as: 'WorkspaceAdministrators',
          order: [['createdAt', 'DESC']],
        },
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });

    const response: AddAdministratorsSuccessResponse = {
      id: updatedWs.id,
      name: updatedWs.name,
      isPremium: updatedWs.isPremium,
      code: updatedWs.code,
      References: updatedWs.References,
      WorkspaceUser: updatedWs.WorkspaceUser,
      WorkspaceAdministrators: updatedWs.WorkspaceAdministrators,
    };

    res.json(response);
  } catch (err) {
    console.log(err);
    const response: FailureResponse = {
      data: {
        message: 'addAdministratorsFailure',
        error: err,
      },
    };
    res.status(401).send(response);
  }
});

router.post('/deleteAdminUser', async (req, res) => {
  try {
    const ws = await Workspace.findOne({
      where: { id: req.body.workspaceId },
    });
    const targetUser = await User.findOne({
      where: { id: req.body.targetUserId },
    });

    await ws.removeWorkspaceAdministrators(targetUser);

    const updatedWs = await Workspace.findOne({
      where: { id: req.body.workspaceId },
      include: [
        {
          model: Reference,
          order: [['createdAt', 'ASC']],
          include: [
            {
              model: Hashtag,
              order: [['createdAt', 'DESC']],
            },
            {
              model: SavedHashs,
              order: [['createdAt', 'DESC']],
            },
          ],
        },
        {
          model: User,
          order: [['createdAt', 'DESC']],
        },
        {
          model: User,
          as: 'WorkspaceAdministrators',
          order: [['createdAt', 'DESC']],
        },
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });

    const response: DeleteAdministratorsSuccessResponse = {
      id: updatedWs.id,
      name: updatedWs.name,
      isPremium: updatedWs.isPremium,
      code: updatedWs.code,
      References: updatedWs.References,
      WorkspaceUser: updatedWs.WorkspaceUser,
      WorkspaceAdministrators: updatedWs.WorkspaceAdministrators,
    };

    res.json(response);
  } catch (err) {
    console.log(err);
    const response: FailureResponse = {
      data: {
        message: 'deleteAdministratorsFailure',
        error: err,
      },
    };
    res.status(401).send(response);
  }
});

router.post('/deleteMember', async (req, res) => {
  try {
    const ws = await Workspace.findOne({
      where: { id: req.body.workspaceId },
    });
    const targetUser = await User.findOne({
      where: { id: req.body.targetUserId },
    });

    await ws.removeUser(targetUser);

    const updatedWs = await Workspace.findOne({
      where: { id: req.body.workspaceId },
      include: [
        {
          model: Reference,
          order: [['createdAt', 'ASC']],
          include: [
            {
              model: Hashtag,
              order: [['createdAt', 'DESC']],
            },
            {
              model: SavedHashs,
              order: [['createdAt', 'DESC']],
            },
          ],
        },
        {
          model: User,
          order: [['createdAt', 'DESC']],
        },
        {
          model: User,
          as: 'WorkspaceAdministrators',
          order: [['createdAt', 'DESC']],
        },
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });

    const response: DeleteMemeberSuccessResponse = {
      id: updatedWs.id,
      name: updatedWs.name,
      isPremium: updatedWs.isPremium,
      code: updatedWs.code,
      References: updatedWs.References,
      WorkspaceUser: updatedWs.WorkspaceUser,
      WorkspaceAdministrators: updatedWs.WorkspaceAdministrators,
    };

    res.json(response);
  } catch (err) {
    console.log(err);
    const response: FailureResponse = {
      data: {
        message: 'deleteMemberFailure',
        error: err,
      },
    };
    res.status(401).send(response);
  }
});

router.post('/changeWorkspace', async (req, res) => {
  try {
    const updatedUser = await User.update(
      {
        lastWorkspaceId: req.body.workspaceId,
        lastReferenceId: req.body.referenceId,
      },
      {
        where: { id: req.session.userId },
      }
    );

    const response: ChangeWorkspaceSuccessResponse = {
      workspaceId: req.body.referenceId,
    };
    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'changeWorkspaceFailure',
        error: err,
      },
    };
    res.status(401).send(response);
    console.log(err);
  }
});

module.exports = router;
