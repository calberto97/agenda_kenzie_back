import { clientCreationResultSchema } from '../../schemas/client';
import { tClientCreationRequest, tClientCreationResult } from '../../interfaces/client';
import { Client } from '../../entities/client';
import { AppDataSource } from '../../data-source';
import { hash } from 'bcryptjs';


const createClientService = async (
  payload: tClientCreationRequest
): Promise<tClientCreationResult> => {
  const repo = AppDataSource.getRepository(Client);
  payload.password = await hash(payload.password, 10)

  const client = repo.create(payload);
  await repo.save(client);

  return clientCreationResultSchema.parse(client);
};

export default createClientService;
