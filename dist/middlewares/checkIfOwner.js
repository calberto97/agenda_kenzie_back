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
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfOwner = void 0;
const contact_1 = require("../entities/contact");
const data_source_1 = require("../data-source");
const errors_1 = require("../errors");
const checkIfOwner = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = res.locals.client.id;
    const contactId = req.params.id;
    const repo = data_source_1.AppDataSource.getRepository(contact_1.Contact);
    const contact = yield repo.findOne({
        where: {
            id: contactId,
        },
        relations: {
            client: true,
        },
    });
    if ((contact === null || contact === void 0 ? void 0 : contact.client.id) == clientId) {
        return next();
    }
    throw new errors_1.AppError("You don't have permission to access this contact", 403);
});
exports.checkIfOwner = checkIfOwner;
