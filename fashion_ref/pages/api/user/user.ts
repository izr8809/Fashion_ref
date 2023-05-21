import { getSession } from "@/lib/session";
import { NextApiRequest, NextApiResponse } from "next";
const { User, Hashtag, Workspace, Reference, SavedHashs, Notification } = require("../../../models");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  switch (req.method) {
    case "GET":
      return await getUserInfo(req, res);
  }

}

async function getUserInfo(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getSession(req);
  if (!userId) {
    res.status(201).json(null);
  }

  const userInfo = await User.findOne({
    where: { id: userId },
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
      order:[["createdAt", "DESC"]],
    }
  ]
  });
  res.json(userInfo);
}