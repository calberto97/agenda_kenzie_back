"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const validateBody = (schema) => (request, response, next) => {
    const validated = schema.parse(request.body);
    request.body = validated;
    return next();
};
exports.validateBody = validateBody;
