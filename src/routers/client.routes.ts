import { getClientContactsController } from './../controllers/client.controllers';
import { Client } from './../entities/client';
import { checkIfUnique } from '../middlewares/checkIfUnique';
import { validateToken } from '../middlewares/validateToken';
import {
  getClientDetailController,
  createClientController,
  clientLoginController,
  patchClientController,
  deleteClientController,
} from '../controllers/client.controllers';
import {
  clientCreationRequestSchema,
  clientLoginSchema,
  clientPatchRequestSchema,
} from '../schemas/client';
import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody';

export const clientRouter: Router = Router();

clientRouter.post(
  '',
  validateBody(clientCreationRequestSchema),
  checkIfUnique(Client, 'email'),
  checkIfUnique(Client, 'phoneNumber'),
  createClientController
);

clientRouter.post(
  '/login',
  validateBody(clientLoginSchema),
  clientLoginController
);

clientRouter.get('', validateToken, getClientDetailController);

clientRouter.patch(
  '',
  validateToken,
  validateBody(clientPatchRequestSchema),
  patchClientController
);

clientRouter.delete('', validateToken, deleteClientController);

clientRouter.get('/contacts', validateToken, getClientContactsController)
