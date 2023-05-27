import { createContactController, deleteContactController, getContactDetailController, patchContactController } from './../controllers/contact.controllers copy';
import { checkIfOwner } from './../middlewares/checkIfOwner';
import { checkIfContactExists } from './../middlewares/checkIfContactExists';
import { contactCreationRequestSchema, contactPatchSchema } from './../schemas/contact';
import { validateToken } from '../middlewares/validateToken';
import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody';

export const contactRouter: Router = Router();

contactRouter.post(
  '',
  validateToken,
  validateBody(contactCreationRequestSchema),
  createContactController
);

contactRouter.get(
  '/:id',
  validateToken,
  checkIfContactExists,
  checkIfOwner,
  getContactDetailController
);

contactRouter.patch(
  '/:id',
  validateToken,
  checkIfContactExists,
  checkIfOwner,
  validateBody(contactPatchSchema),
  patchContactController
);

contactRouter.delete(
  '/:id',
  validateToken,
  checkIfContactExists,
  checkIfOwner,
  deleteContactController
);
