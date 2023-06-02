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
const client_1 = require("../../entities/client");
const data_source_1 = require("../../data-source");
const bcryptjs_1 = require("bcryptjs");
const errors_1 = require("../../errors");
const jsonwebtoken_1 = require("jsonwebtoken");
const clientLoginService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = data_source_1.AppDataSource.getRepository(client_1.Client);
    const client = yield repo.findOneBy({ email: payload.email });
    if (!client) {
        throw new errors_1.AppError('Invalid credentials!', 401);
    }
    const checkPw = yield (0, bcryptjs_1.compare)(payload.password, client.password);
    if (!checkPw) {
        throw new errors_1.AppError('Invalid credentials!', 401);
    }
    const token = (0, jsonwebtoken_1.sign)({ email: payload.email }, String(process.env.SECRET_KEY), { expiresIn: '24h', subject: String(client.id) });
    return { token };
});
exports.default = clientLoginService;
