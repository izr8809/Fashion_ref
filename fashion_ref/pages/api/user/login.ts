// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcrypt";
import { setSession } from '@/lib/session';
const { User, Hashtag, Workspace, Reference, SavedHashs, Notification } = require("../../../models");


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
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
            },
            {
              model : SavedHashs,
              order: [["createdAt", "DESC"]],
            },
          ],
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
    setSession(res, {userId: userInfo.id, name: userInfo.name})
    res.json(userInfo);
  } else {
    res.status(400).send({ data: null, message: "wrong" });
  }
}
