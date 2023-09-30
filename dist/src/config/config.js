"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.HOSTNAME = exports.DB_PORT = exports.DB_HOST = exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USERNAME = exports.JWT_SECRET = exports.JWT_SECRET_OR_KEY = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { JWT_SECRET_OR_KEY, JWT_SECRET, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT, HOSTNAME, PORT } = process.env;
exports.JWT_SECRET_OR_KEY = JWT_SECRET_OR_KEY;
exports.JWT_SECRET = JWT_SECRET;
exports.DB_USERNAME = DB_USERNAME;
exports.DB_PASSWORD = DB_PASSWORD;
exports.DB_NAME = DB_NAME;
exports.DB_HOST = DB_HOST;
exports.DB_PORT = DB_PORT;
exports.HOSTNAME = HOSTNAME;
exports.PORT = PORT;
if (!JWT_SECRET) {
    throw new Error('Please provide a JWT_SECRET');
}
