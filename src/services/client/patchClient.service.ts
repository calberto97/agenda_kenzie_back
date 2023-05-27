import { tClientPatch } from './../../interfaces/client';
import { clientCreationResultSchema } from '../../schemas/client';
import { tClientCreationResult } from '../../interfaces/client';
import { Client } from '../../entities/client';
import { AppDataSource } from '../../data-source';
import { hash } from 'bcryptjs';

const patchClientService = async (
  payload: tClientPatch,
  id: string
): Promise<tClientCreationResult> => {
  const repo = AppDataSource.getRepository(Client);
  const client = await repo.findOneBy({ id: id });

  if (payload.password) {
    payload.password = await hash(payload.password, 10);
  }
  const updatedClient = repo.create({ ...client, ...payload});
  await repo.save(updatedClient);

  return clientCreationResultSchema.parse(updatedClient);
};

export default patchClientService;
