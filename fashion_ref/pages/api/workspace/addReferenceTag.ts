import type { NextApiRequest, NextApiResponse } from 'next';

const {
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
  User
} = require('../../../models');

interface AddReferenceTagSuccessResponse extends WorkspaceInfo {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddReferenceTagSuccessResponse | FailureResponse>
) {
  if (req.method !== 'POST') {
    return;
  }
  try {
    console.log(req.body.tags)
    const reference = await Reference.findOne({
      id: req.body.refernceId,
    });

    const newSavedHashs = await SavedHashs.create({
      hashs: req.body.tags,
    });

    await reference.addSavedHashs(newSavedHashs);

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
          model : User,
        }
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });

    const response: AddReferenceTagSuccessResponse = {
      id: updatedWs.id,
      name: updatedWs.name,
      isPremium: updatedWs.isPremium,
      code: updatedWs.code,
      Users: updatedWs.Users,
      References: updatedWs.References,
    };

    res.json(response);
  } catch (err) {
    const response: FailureResponse = {
      data: {
        message: 'addReferenceTagFailure',
        error: err,
      },
    };
    res.status(401).send(response);
    console.log(err);
  }
}
