import { clientSchema } from './client';
import { z } from 'zod';

export const contactSchema = clientSchema
  .extend({
    client: z.string(),
  })
  .omit({ password: true });

export const contactCreationRequestSchema = contactSchema.omit({
  id: true,
  client: true,
  createdAt: true,
});

export const contactCreationResultSchema = contactSchema.omit({
  client: true,
});

export const contactPatchSchema =
  contactCreationRequestSchema.partial();
