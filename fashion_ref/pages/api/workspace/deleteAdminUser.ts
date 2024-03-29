import type { NextApiRequest, NextApiResponse } from 'next';

const {
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
  User,
} = require('../../../models');

interface DeleteAdministratorsSuccessResponse extends WorkspaceInfo {
  Users: [];
  WorkspaceAdministrators: [];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DeleteAdministratorsSuccessResponse | FailureResponse>
) {
  try {
    const ws = await Workspace.findOne({
      where: { id: req.body.workspaceId },
    });
    const targetUser = await User.findOne({
      where: { id: req.body.targetUserId },
    });

    await ws.removeWorkspaceAdministrators(targetUser);

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

    console.log(updatedWs)

    const response: DeleteAdministratorsSuccessResponse = {
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
        message: 'deleteAdministratorsFailure',
        error: err,
      },
    };
    res.status(401).send(response);
  }
}
