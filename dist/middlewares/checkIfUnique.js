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
exports.checkIfUnique = void 0;
const errors_1 = require("./../errors");
const data_source_1 = require("./../data-source");
const checkIfUnique = (Entity, key) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = data_source_1.AppDataSource.getRepository(Entity);
    const value = req.body[`${key}`];
    const exists = yield repo.findOneBy({ [`${key}`]: value });
    if (exists) {
        throw new errors_1.AppError(`${key[0].toUpperCase() + key.slice(1)} already registered`, 409);
    }
    return next();
});
exports.checkIfUnique = checkIfUnique;
