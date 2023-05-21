import { getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next'
const { User, Workspace, Notification, Reference, Hashtag, SavedHashs } = require("../../../models");

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(400).send({data: null, message: "Error"})
  }

  const { userId } = getSession(req);

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
      From : userId,
      content : content,
      workspaceId : -1,
      notitype : 2,
    })
    await newNoti.addUser(fromUser);
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
          ],
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
}
