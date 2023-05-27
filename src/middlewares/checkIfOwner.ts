import { Contact } from '../entities/contact';
import { AppDataSource } from '../data-source';
import { AppError } from '../errors';
import { Request, Response, NextFunction } from 'express';

export const checkIfOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const clientId = res.locals.client.id;
  const contactId = req.params.id;

  const repo = AppDataSource.getRepository(Contact);
  const contact = await repo.findOne({
    where: {
      id: contactId,
    },
    relations: {
      client: true,
    },
  });

  if (contact?.client.id == clientId) {
    return next();
  }

  throw new AppError(
    "You don't have permission to access this contact",
    403
  );
};
