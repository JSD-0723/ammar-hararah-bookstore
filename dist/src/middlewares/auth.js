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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const user_1 = require("../controllers/user");
const authenticateMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET);
        const user = yield (0, user_1.getUserById)(decoded.id);
        if (!user) {
            throw new Error("Failed to retreive user!");
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
});
exports.default = authenticateMiddleware;
