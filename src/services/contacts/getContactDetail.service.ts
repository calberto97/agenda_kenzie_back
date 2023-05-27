import { contactCreationResultSchema } from '../../schemas/contact';
import { Contact } from '../../entities/contact';
import { tContactCreationResult } from '../../interfaces/contact';
import { AppDataSource } from '../../data-source';

const getContactDetailService = async (
  contactId: string
): Promise<tContactCreationResult> => {
  const repo = AppDataSource.getRepository(Contact);

  const contact = await repo.findOneBy({ id: contactId });

  return contactCreationResultSchema.parse(contact);
};

export default getContactDetailService;
