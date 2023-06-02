"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientPatchRequestSchema = exports.clientLoginSchema = exports.clientCreationResultSchema = exports.clientCreationRequestSchema = exports.clientSchema = void 0;
const zod_1 = require("zod");
exports.clientSchema = zod_1.z.object({
    id: zod_1.z.string(),
    fullName: zod_1.z.string().max(127),
    email: zod_1.z.string().email().max(127),
    password: zod_1.z.string().max(127),
    phoneNumber: zod_1.z
        .string()
        .regex(/^\s*(\d{2}|\d{0})[-. ](\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/, "Phone Number format must be 12 12345 1234")
        .max(20),
    createdAt: zod_1.z.date(),
});
exports.clientCreationRequestSchema = exports.clientSchema.omit({
    id: true,
    createdAt: true,
});
exports.clientCreationResultSchema = exports.clientSchema.omit({
    password: true,
});
exports.clientLoginSchema = exports.clientSchema.pick({
    email: true,
    password: true
});
exports.clientPatchRequestSchema = exports.clientCreationRequestSchema.partial();
