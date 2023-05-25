import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@/lib/session';
const {
  User,
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
  Notification,
} = require('../../../models');

interface RequestConfirmSuccessResponse extends UserInfo {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RequestConfirmSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const noti = await Notification.findOne({
      where: { id: req.body.id },
    });

    const ws = await Workspace.findOne({
      where: { id: noti.workspaceId },
    });

    const fromUser = await User.findOne({
      where: { id: noti.From },
    });

    await ws.addUser(fromUser);

    const { userId } = getSession(req);

    const content = ws.name + ' 가입이 승인되었습니다';
    const newNoti = await Notification.create({
      From: userId,
      content: content,
      workspaceId: -1,
      notitype: 2,
    });
    await newNoti.addUser(fromUser);
    await Notification.destroy({
      where: { id: noti.id },
    });

    const userInfo = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Workspace,
          order: [['id', 'DESC']],
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
        },
        {
          model: Notification,
          order: [['createdAt', 'DESC']],
        },
      ],
      order: [[Workspace, Reference, 'createdAt', 'DESC']],
    });

    const response: RequestConfirmSuccessResponse = {
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
      Workspaces: userInfo.Workspaces,
      Notifications: userInfo.Notifications,
      lastBoardId: userInfo.lastBoardId,
      lastReferenceId: userInfo.lastReferenceId,
      lastWorkspaceId: userInfo.lastWorkspaceId,
    };

    res.json(response);
  } catch (err) {
    console.log(err);
    const response: FailureResponse = {
      data: {
        message: 'requestConfirmFailure',
      },
    };
    res.status(400).send(response);
  }
}
