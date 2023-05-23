import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { setSession } from '@/lib/session';
const {
  User,
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
  Notification,
} = require('../../../models');

interface LoginSuccessResponse extends UserInfo {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginSuccessResponse | FailureResponse>
) {
  // user 정보를 DB에서 조회
  // console.log("email" +req.body.email)

  const { email, password } = req.body;

  const userInfo = await User.findOne({
    where: { email },
    include: [
      {
        model: Workspace,
        include: [
          {
            model: Reference,
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
      },
      {
        model: Notification,
        order: [['createdAt', 'DESC']],
      },
    ],
    order: [[Workspace, Reference, 'createdAt', 'DESC']],
  });

  if (!userInfo) {
    return res.status(400).send({ data: { message: 'user not found' } });
  }

  const passwordmatch = bcrypt.compareSync(password, userInfo.password);
  if (!passwordmatch) {
    return res.status(400).send({ data: { message: 'user not found' } });
  }

  setSession(res, { userId: userInfo.id, name: userInfo.name });

  res.json({
    id: userInfo.id,
    name: userInfo.name,
    email: userInfo.email,
    Workspaces: userInfo.Workspaces,
    Notifications: userInfo.Notifications,
    lastBoardId: userInfo.lastBoardId,
    lastReferenceId: userInfo.lastReferenceId,
    lastWorkspaceId: userInfo.lastWorkspaceId,
  });
}
