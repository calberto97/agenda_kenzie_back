"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactPatchSchema = exports.contactCreationResultSchema = exports.contactCreationRequestSchema = exports.contactSchema = void 0;
const client_1 = require("./client");
const zod_1 = require("zod");
exports.contactSchema = client_1.clientSchema
    .extend({
    client: zod_1.z.string(),
})
    .omit({ password: true });
exports.contactCreationRequestSchema = exports.contactSchema.omit({
    id: true,
    client: true,
    createdAt: true,
});
exports.contactCreationResultSchema = exports.contactSchema.omit({
    client: true,
});
exports.contactPatchSchema = exports.contactCreationRequestSchema.partial();
