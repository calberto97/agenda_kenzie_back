import { z } from 'zod';
import { DeepPartial } from 'typeorm';
import {
  clientSchema,
  clientCreationRequestSchema,
  clientCreationResultSchema,
  clientLoginSchema,
} from './../schemas/client';

export type tClient = z.infer<typeof clientSchema>;

export type tClientCreationRequest = z.infer<
  typeof clientCreationRequestSchema
>;
export type tClientCreationResult = z.infer<
  typeof clientCreationResultSchema
>;

export type tClientLogin = z.infer<typeof clientLoginSchema>;

export type tClientPatch = DeepPartial<tClientCreationRequest>;
