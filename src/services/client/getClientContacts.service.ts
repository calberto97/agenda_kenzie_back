import { Contact } from './../../entities/contact';
import { tContactCreationResult } from './../../interfaces/contact';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client';

const getClientContactsService = async (
  query: any,
  id: string
): Promise<any> => {
  const repo = AppDataSource.getRepository(Contact);
  let page = +query.page || 1;
  let perPage = +query.perPage || 4;
  const contacts = await repo.findAndCount({
    where: {
      client: { id: id },
    },
    take: perPage,
    skip: perPage * (page - 1),
  });

  const baseUrl = `http://localhost:3000/client/contacts`;
  const lastPage = Math.ceil(contacts[1] / perPage);
  const prevPage =
    page <= 1
      ? null
      : lastPage >= page - 1
      ? `${baseUrl}?page=${page - 1}&perPage=${perPage}`
      : null;
  const nextPage =
    lastPage <= page
      ? null
      : `${baseUrl}?page=${page + 1}&perPage=${perPage}`;

  return {
    prevPage: prevPage !== null ? `${prevPage}` : null,
    nextPage: nextPage !== null ? `${nextPage}` : null,
    count: contacts[1],
    data: contacts[0],
  };
};

export default getClientContactsService;
