import type { NextApiRequest, NextApiResponse } from 'next';

const {
  Hashtag,
  Workspace,
  Reference,
  SavedHashs,
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
      ],
      order: [[Reference, 'createdAt', 'DESC']],
    });

    const response: AddReferenceTagSuccessResponse = {
      id: updatedWs.id,
      name: updatedWs.name,
      isPremium: updatedWs.isPremium,
      code: updatedWs.code,
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
