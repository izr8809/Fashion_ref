import { getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next'
const { User, Workspace, Notification } = require("../../../models");

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method !== "POST") {
    res.status(400).send({data: null, message: "Error"})
  }

  const { userId } = getSession(req);
  const { code } = req.body;

  const fromUserId = userId;

  const user = await User.findOne({
    where:{id : fromUserId}
  }) 
  const userName = user.name;
  const content = userName + "님이 팀스페이스에 참여하고 싶어합니다";

  const ws = await Workspace.findOne({
    where: { code },
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
    noti.addUser(administrator.map((v: any) => v))
    res.send({message:"success"}) 
  }else{
    res.status(400).send({message : "no_ws"})
  }
}
