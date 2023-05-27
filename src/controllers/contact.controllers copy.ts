import { Request, Response } from 'express';
import createClientService from '../services/client/createClient.service';
import createContactService from '../services/contacts/createContact.service';
import deleteContactService from '../services/contacts/deleteContact.service';
import getContactDetailService from '../services/contacts/getContactDetail.service';
import patchContactService from '../services/contacts/patchContact.service';

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await createContactService(
    req.body,
    res.locals.client.id
  );

  return res.status(201).json(contact);
};

export const getContactDetailController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await getContactDetailService(req.params.id);

  return res.json(client);
};

export const patchContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await patchContactService(
    req.body,
    req.params.id
  );

  return res.json(client);
};

export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteContactService(req.params.id);

  return res.status(204).send();
};
