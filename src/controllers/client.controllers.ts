import { Request, Response } from 'express';
import clientLoginService from '../services/client/clientLogin.service';
import createClientService from '../services/client/createClient.service';
import deleteClientService from '../services/client/deleteClient.service';
import getClientContactsService from '../services/client/getClientContacts.service';
import getClientDetailService from '../services/client/getClientDetail.service';
import patchClientService from '../services/client/patchClient.service';

export const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await createClientService(req.body);

  return res.status(201).json(client);
};

export const clientLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await clientLoginService(req.body);

  return res.json(token);
};

export const getClientDetailController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await getClientDetailService(res.locals.client.id);

  return res.json(client);
};

export const patchClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await patchClientService(
    req.body,
    res.locals.client.id
  );

  return res.json(client);
};

export const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteClientService(res.locals.client.id);

  return res.status(204).send();
};

export const getClientContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await getClientContactsService(req.query,res.locals.client.id);

  return res.json(contacts);
};