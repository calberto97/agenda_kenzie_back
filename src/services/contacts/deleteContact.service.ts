import { Contact } from '../../entities/contact';
import { AppDataSource } from '../../data-source';

const deleteContactService = async (
  contactId: string
): Promise<void> => {
  const repo = AppDataSource.getRepository(Contact);
  const contact = await repo.findOneBy({ id: contactId });
  await repo.remove(contact!);
};

export default deleteContactService;
