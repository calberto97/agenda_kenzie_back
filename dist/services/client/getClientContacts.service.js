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
const contact_1 = require("./../../entities/contact");
const data_source_1 = require("../../data-source");
const getClientContactsService = (query, id) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = data_source_1.AppDataSource.getRepository(contact_1.Contact);
    let page = +query.page || 1;
    let perPage = +query.perPage || 4;
    const contacts = yield repo.findAndCount({
        where: {
            client: { id: id },
        },
        take: perPage,
        skip: perPage * (page - 1),
    });
    const baseUrl = `http://localhost:3000/client/contacts`;
    const lastPage = Math.ceil(contacts[1] / perPage);
    const prevPage = page <= 1
        ? null
        : lastPage >= page - 1
            ? `${baseUrl}?page=${page - 1}&perPage=${perPage}`
            : null;
    const nextPage = lastPage <= page
        ? null
        : `${baseUrl}?page=${page + 1}&perPage=${perPage}`;
    return {
        prevPage: prevPage !== null ? `${prevPage}` : null,
        nextPage: nextPage !== null ? `${nextPage}` : null,
        count: contacts[1],
        data: contacts[0],
    };
});
exports.default = getClientContactsService;
