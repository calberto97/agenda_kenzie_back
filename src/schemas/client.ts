import { z } from 'zod';

export const clientSchema = z.object({
  id: z.string(),
  fullName: z.string().max(127),
  email: z.string().email().max(127),
  password: z.string().max(127),
  phoneNumber: z
    .string()
    .regex(
      /^\s*(\d{2}|\d{0})[-. ](\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
      "Phone Number format must be 12 12345 1234"
    )
    .max(20),
  createdAt: z.date(),
});

export const clientCreationRequestSchema = clientSchema.omit({
  id: true,
  createdAt: true,
});

export const clientCreationResultSchema = clientSchema.omit({
  password: true,
});

export const clientLoginSchema = clientSchema.pick({
  email: true,
  password: true
})

export const clientPatchRequestSchema = clientCreationRequestSchema.partial()