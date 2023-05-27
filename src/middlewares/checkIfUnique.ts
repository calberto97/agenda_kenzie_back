import { AppError } from './../errors';
import { AppDataSource } from './../data-source';
import { Request, Response, NextFunction } from 'express';
import { Client } from '../entities';
import { EntityTarget, ObjectLiteral } from 'typeorm';

export const checkIfUnique =
  (Entity: EntityTarget<ObjectLiteral>, key: string) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const repo = AppDataSource.getRepository(Entity);
    const value = req.body[`${key}`];
    const exists = await repo.findOneBy({ [`${key}`]: value });

    if (exists) {
      throw new AppError(
        `${key[0].toUpperCase() + key.slice(1)} already registered`,
        409
      );
    }

    return next();
  };
