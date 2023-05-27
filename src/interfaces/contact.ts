import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  contactSchema,
  contactCreationRequestSchema,
  contactCreationResultSchema,
} from './../schemas/contact';

export type tContact = z.infer<typeof contactSchema>;

export type tContactCreationRequest = z.infer<
  typeof contactCreationRequestSchema
>;

export type tContactCreationResult = z.infer<
  typeof contactCreationResultSchema
>;

export type tContactPatch = DeepPartial<tContactCreationRequest>;
