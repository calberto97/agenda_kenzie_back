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
exports.errorHandler = exports.AppError = void 0;
require("express-async-errors");
const zod_1 = require("zod");
const typeorm_1 = require("typeorm");
class AppError extends Error {
    constructor(message, statusCode = 400) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
const errorHandler = (error, request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (error instanceof AppError) {
        return response
            .status(error.statusCode)
            .json({ message: error.message });
    }
    if (error instanceof zod_1.ZodError) {
        return response
            .status(400)
            .json({ message: error.flatten().fieldErrors });
    }
    if (error instanceof typeorm_1.QueryFailedError) {
        return response.status(400).json({ message: error.message });
    }
    console.log(error);
    return response
        .status(500)
        .json({ message: "Internal Server Error" });
});
exports.errorHandler = errorHandler;
