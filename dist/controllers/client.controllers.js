"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientContactsController = exports.deleteClientController = exports.patchClientController = exports.getClientDetailController = exports.clientLoginController = exports.createClientController = void 0;
const clientLogin_service_1 = __importDefault(require("../services/client/clientLogin.service"));
const createClient_service_1 = __importDefault(require("../services/client/createClient.service"));
const deleteClient_service_1 = __importDefault(require("../services/client/deleteClient.service"));
const getClientContacts_service_1 = __importDefault(require("../services/client/getClientContacts.service"));
const getClientDetail_service_1 = __importDefault(require("../services/client/getClientDetail.service"));
const patchClient_service_1 = __importDefault(require("../services/client/patchClient.service"));
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, createClient_service_1.default)(req.body);
    return res.status(201).json(client);
});
exports.createClientController = createClientController;
const clientLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, clientLogin_service_1.default)(req.body);
    return res.json(token);
});
exports.clientLoginController = clientLoginController;
const getClientDetailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, getClientDetail_service_1.default)(res.locals.client.id);
    return res.json(client);
});
exports.getClientDetailController = getClientDetailController;
const patchClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, patchClient_service_1.default)(req.body, res.locals.client.id);
    return res.json(client);
});
exports.patchClientController = patchClientController;
const deleteClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteClient_service_1.default)(res.locals.client.id);
    return res.status(204).send();
});
exports.deleteClientController = deleteClientController;
const getClientContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield (0, getClientContacts_service_1.default)(req.query, res.locals.client.id);
    return res.json(contacts);
});
exports.getClientContactsController = getClientContactsController;
