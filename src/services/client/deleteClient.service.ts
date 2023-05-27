import { Client } from '../../entities/client';
import { AppDataSource } from '../../data-source';

const deleteClientService = async (id: string): Promise<void> => {
  const repo = AppDataSource.getRepository(Client);
  const client = await repo.findOneBy({ id: id });

  await repo.remove(client!);
};

export default deleteClientService;
