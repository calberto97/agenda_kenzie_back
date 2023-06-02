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
exports.validateToken = void 0;
const errors_1 = require("./../errors");
const jsonwebtoken_1 = require("jsonwebtoken");
const validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        throw new errors_1.AppError('Missing authorization token', 401);
    }
    return (0, jsonwebtoken_1.verify)(token, String(process.env.SECRET_KEY), (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: error.message });
        }
        res.locals.client = { id: decoded.sub, email: decoded.email };
        return next();
    });
});
exports.validateToken = validateToken;
