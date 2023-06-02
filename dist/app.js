"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const errors_1 = require("./errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_routes_1 = require("./routers/client.routes");
const contact_routes_1 = require("./routers/contact.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/client', client_routes_1.clientRouter);
app.use('/contacts', contact_routes_1.contactRouter);
app.use(errors_1.errorHandler);
exports.default = app;
