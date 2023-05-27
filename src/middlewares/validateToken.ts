import { AppError } from './../errors';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new AppError('Missing authorization token', 401);
  }

  return verify(
    token,
    String(process.env.SECRET_KEY),
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: error.message });
      }

      res.locals.client = { id: decoded.sub, email: decoded.email };
      return next();
    }
  );
};
