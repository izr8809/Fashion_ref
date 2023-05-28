import type { NextApiRequest, NextApiResponse } from 'next';

const {
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
  User,
} = require('../../../models');

interface AddAdministratorsSuccessResponse extends WorkspaceInfo {
  Users: [];
  WorkspaceAdministrators: [];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddAdministratorsSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }
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
      Users: updatedWs.Users,
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
}
