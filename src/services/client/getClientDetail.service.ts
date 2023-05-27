import { clientCreationResultSchema } from './../../schemas/client';
import { AppDataSource } from '../../data-source';
import { tClientCreationResult } from '../../interfaces/client';
import { Client } from '../../entities/client';

const getClientDetailService = async (
  id: string
): Promise<tClientCreationResult> => {
  const repo = AppDataSource.getRepository(Client);
  const client = await repo.findOneBy({id: id})

  return clientCreationResultSchema.parse(client);
};

export default getClientDetailService