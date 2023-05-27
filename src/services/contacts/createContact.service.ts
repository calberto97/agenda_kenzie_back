import { contactCreationResultSchema } from './../../schemas/contact';
import { Contact } from './../../entities/contact';
import {
  tContactCreationRequest,
  tContactCreationResult,
} from './../../interfaces/contact';
import { AppDataSource } from '../../data-source';

const createContactService = async (
  payload: tContactCreationRequest,
  id: string
): Promise<tContactCreationResult> => {
  const repo = AppDataSource.getRepository(Contact);

  const contact = repo.create({ ...payload, client: id });

  await repo.save(contact);
  return contactCreationResultSchema.parse(contact);
};

export default createContactService;
