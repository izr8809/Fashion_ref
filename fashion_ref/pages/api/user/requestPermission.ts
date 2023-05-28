import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@/lib/session';
const { User, Workspace, Notification } = require('../../../models');

interface RequestPermissionSuccessResponse {
    message: string;
  }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RequestPermissionSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  const { userId } = getSession(req);

  try {
    const brandCode = req.body.code;

    const user = await User.findOne({
      where: { id: userId },
    });
    const userName = user.name;
    const content = userName + "님이 팀스페이스에 참여하고 싶어합니다";

    const ws = await Workspace.findOne({
      where: { code: brandCode },
      include: [
        {
          model: User,
          as: "WorkspaceAdministrators",
        },
      ],
    });

    if (ws) {
      const administrator = await ws.getWorkspaceAdministrators();
      const noti = await Notification.create({
        From: userId,
        content: content,
        workspaceId: ws.id,
        notitype: 1,
      });
      noti.addUser(administrator.map((v: any) => v));

      const response: RequestPermissionSuccessResponse = {
        message: "requestPermissionSuccess",
      };
      res.send(response);
    } else {
      const response: FailureResponse = {
        data: {
          message: "requestWsPermissionFailure",
        },
      };
      res.status(400).send(response);
    }
  } catch (err) {
    console.log(err);
    const response: FailureResponse = {
      data: {
        message: "requestWsPermissionFailure",
      },
    };
    res.status(400).send(response);
  }

  }
