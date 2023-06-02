"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRouter = void 0;
const client_controllers_1 = require("./../controllers/client.controllers");
const client_1 = require("./../entities/client");
const checkIfUnique_1 = require("../middlewares/checkIfUnique");
const validateToken_1 = require("../middlewares/validateToken");
const client_controllers_2 = require("../controllers/client.controllers");
const client_2 = require("../schemas/client");
const express_1 = require("express");
const validateBody_1 = require("../middlewares/validateBody");
exports.clientRouter = (0, express_1.Router)();
exports.clientRouter.post('', (0, validateBody_1.validateBody)(client_2.clientCreationRequestSchema), (0, checkIfUnique_1.checkIfUnique)(client_1.Client, 'email'), (0, checkIfUnique_1.checkIfUnique)(client_1.Client, 'phoneNumber'), client_controllers_2.createClientController);
exports.clientRouter.post('/login', (0, validateBody_1.validateBody)(client_2.clientLoginSchema), client_controllers_2.clientLoginController);
exports.clientRouter.get('', validateToken_1.validateToken, client_controllers_2.getClientDetailController);
exports.clientRouter.patch('', validateToken_1.validateToken, (0, validateBody_1.validateBody)(client_2.clientPatchRequestSchema), client_controllers_2.patchClientController);
exports.clientRouter.delete('', validateToken_1.validateToken, client_controllers_2.deleteClientController);
exports.clientRouter.get('/contacts', validateToken_1.validateToken, client_controllers_1.getClientContactsController);