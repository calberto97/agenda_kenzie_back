import { tContactPatch } from './../../interfaces/contact';
import { contactCreationResultSchema } from '../../schemas/contact';
import { Contact } from '../../entities/contact';
import { tContactCreationResult } from '../../interfaces/contact';
import { AppDataSource } from '../../data-source';

const patchContactService = async (
  payload: tContactPatch,
  contactId: string
): Promise<tContactCreationResult> => {
  const repo = AppDataSource.getRepository(Contact);

  const contact = await repo.findOneBy({ id: contactId });
  
  const updatedContact = repo.create({ ...contact, ...payload })
  await repo.save(updatedContact)

  return contactCreationResultSchema.parse(updatedContact);
};

export default patchContactService;
