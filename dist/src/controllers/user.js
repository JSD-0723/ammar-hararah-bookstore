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
exports.getUserById = exports.loginUser = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const generateToken = (userId) => {
    const secret = 'your-secret-key';
    const expiresIn = '1h';
    return jsonwebtoken_1.default.sign({ userId }, secret, { expiresIn });
};
const registerUser = (email, password, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield user_1.default.findOne({ where: { email } });
        if (existingUser) {
            return 'Email is already in use';
        }
        const newUser = yield user_1.default.create({ email, password, type });
        const token = generateToken(newUser.id);
        return token;
    }
    catch (error) {
        console.error('Error during user registration:', error);
        return 'Internal server error';
    }
});
exports.registerUser = registerUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({ where: { email } });
        if (user && user.comparePassword(password)) {
            const token = generateToken(user.id);
            return token;
        }
        else {
            return 'Invalid email or password';
        }
    }
    catch (error) {
        console.error('Error during user login:', error);
        return 'Internal server error';
    }
});
exports.loginUser = loginUser;
function getUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.default.findByPk(userId);
            return user || null;
        }
        catch (error) {
            // Handle errors, log them, etc.
            console.error('Error fetching user by ID:', error);
            return null;
        }
    });
}
exports.getUserById = getUserById;
