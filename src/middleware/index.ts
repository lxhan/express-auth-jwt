import { Request, Response, NextFunction } from 'express';
import { verifyAuthToken } from '../controllers/auth';

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization?.split(' ')[1]
      : '';
    if (!token) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    const data = verifyAuthToken(token);
    req.user = data;
    return next();
  } catch (err: any) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
};
