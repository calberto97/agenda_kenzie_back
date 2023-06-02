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
const client_1 = require("../../schemas/client");
const client_2 = require("../../entities/client");
const data_source_1 = require("../../data-source");
const bcryptjs_1 = require("bcryptjs");
const createClientService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = data_source_1.AppDataSource.getRepository(client_2.Client);
    payload.password = yield (0, bcryptjs_1.hash)(payload.password, 10);
    const client = repo.create(payload);
    yield repo.save(client);
    return client_1.clientCreationResultSchema.parse(client);
});
exports.default = createClientService;
