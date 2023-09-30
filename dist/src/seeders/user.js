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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const seedUsers = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersData = [
            {
                email: 'user1@example.com',
                password: 'password123',
                type: 'customer',
            },
            {
                email: 'user2@example.com',
                password: 'password456',
                type: 'admin',
            },
        ];
        const hashedUsers = yield Promise.all(usersData.map((user) => __awaiter(void 0, void 0, void 0, function* () {
            const salt = bcrypt_1.default.genSaltSync();
            user.password = bcrypt_1.default.hashSync(user.password, salt);
            return user;
        })));
        yield user_1.default.bulkCreate(hashedUsers);
        console.log('Users seeded successfully.');
    }
    catch (error) {
        console.error('Error seeding users:', error);
    }
});
exports.default = seedUsers;
