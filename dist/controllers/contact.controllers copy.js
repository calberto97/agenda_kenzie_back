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
exports.deleteContactController = exports.patchContactController = exports.getContactDetailController = exports.createContactController = void 0;
const createContact_service_1 = __importDefault(require("../services/contacts/createContact.service"));
const deleteContact_service_1 = __importDefault(require("../services/contacts/deleteContact.service"));
const getContactDetail_service_1 = __importDefault(require("../services/contacts/getContactDetail.service"));
const patchContact_service_1 = __importDefault(require("../services/contacts/patchContact.service"));
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield (0, createContact_service_1.default)(req.body, res.locals.client.id);
    return res.status(201).json(contact);
});
exports.createContactController = createContactController;
const getContactDetailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, getContactDetail_service_1.default)(req.params.id);
    return res.json(client);
});
exports.getContactDetailController = getContactDetailController;
const patchContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, patchContact_service_1.default)(req.body, req.params.id);
    return res.json(client);
});
exports.patchContactController = patchContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteContact_service_1.default)(req.params.id);
    return res.status(204).send();
});
exports.deleteContactController = deleteContactController;
