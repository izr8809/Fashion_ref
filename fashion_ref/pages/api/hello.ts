import type { NextApiRequest, NextApiResponse } from 'next';

const {
  User,
  Post,
  Hashtag,
  Image,
  Workspace,
  Reference,
  SavedHashs,
  Notification,
} = require('../../../models');

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}
