import { destroySession, getSession } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userId } = getSession(req);
  if (!userId) {
    return res.status(400).send({ data: null, message: "not authorized" });
  }

  destroySession(res);
  return res.json({ data: null, message: "ok" });
}