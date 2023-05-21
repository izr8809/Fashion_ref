import { getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next'
const { User, Hashtag, Workspace, Reference, SavedHashs, Notification } = require("../../../models");

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method !== "POST") {
    res.status(400).send({data: null, message: "Error"})
  }

  const id = parseInt(req.body.id);
  const { userId } = getSession(req);

  const noti = await Notification.findOne({
    where :{id}
  })
  await Notification.destroy({
    where:{id : noti.id}
    });

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
}
