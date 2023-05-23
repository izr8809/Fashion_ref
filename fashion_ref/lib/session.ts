import cookie from 'cookie';
import jwt from 'jsonwebtoken';

const secret = process.env.COOKIE_SECRETKEY!;

interface SessionInfo {
  userId?: string;
  name?: string;
}

export function setSession(res: any, session: any) {
  const token = jwt.sign(session, secret);
  const cookieValue = cookie.serialize('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    sameSite: 'strict',
    path: '/',
  });
  res.setHeader('Set-Cookie', cookieValue);
}

export function getSession(req: any): SessionInfo {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.session;
  if (!token) return {};
  try {
    return jwt.verify(token, secret) as SessionInfo;
  } catch (err) {
    return {};
  }
}

export function destroySession(res: any) {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0),
      sameSite: 'strict',
      path: '/',
    })
  );
}
