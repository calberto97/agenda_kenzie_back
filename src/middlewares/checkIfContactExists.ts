import { Contact } from '../entities/contact';
import { AppError } from '../errors';
import { AppDataSource } from '../data-source';
import { Request, Response, NextFunction } from 'express';

export const checkIfContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<NextFunction | void> => {
  const id = req.params.id;
  const repo = AppDataSource.getRepository(Contact);
  const contact = await repo.findOneBy({ id: id });

  if (!contact) {
    throw new AppError('Contact not found', 404);
  }

  return next();
};
