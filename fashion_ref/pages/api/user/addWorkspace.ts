import { getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next'
const { User, Hashtag, Workspace, Reference, SavedHashs } = require("../../../models");

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method !== "POST") {
    res.status(400).send({data: null, message: "Error"})
  }

  const { name } = req.body;
  const { userId } = getSession(req);
  if (name) {
    const workspace = await Workspace.findOne({
      where:{ name : req.body.name}
    })
    if(workspace){
      res.status(400).send({data: null, message: "already exist"})
    }else{
      const newWorkspace = await Workspace.create({
        name,
        isPremium : false,
        code : name + Math.floor(Math.random()*10000)
      })
      const user = await User.findOne({
        where:{ id : userId }
      })
  
      await newWorkspace.addUser(user);
      await newWorkspace.addWorkspaceAdministrators(user);
  
      const userInfo = await User.findOne({
        where: { id: userId },
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
              },
              {
                model : User,
                order: [["createdAt", "DESC"]],
              },
              {
                model : User,
                as : "WorkspaceAdministrators",
                order: [["createdAt", "DESC"]],
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
}
