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
const user_1 = __importDefault(require("../models/user"));
const config_1 = require("../config/config");
const errors_1 = __importDefault(require("./errors"));
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield user_1.default.findOne({ where: { email } });
                if (!(user && user.comparePassword(password))) {
                    res.status(401).json({ message: 'Invalid credentials' });
                    return;
                }
                const payload = { id: user.id };
                const token = jsonwebtoken_1.default.sign(payload, config_1.JWT_SECRET, { expiresIn: '1h' });
                res.json({ token });
            }
            catch (error) {
                res.status(500).json({ error: (0, errors_1.default)(error) });
            }
        });
    }
}
exports.default = new AuthController();
