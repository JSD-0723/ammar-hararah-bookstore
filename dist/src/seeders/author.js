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
const author_1 = __importDefault(require("../models/author"));
const seedAuthors = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorsData = [
            { name: 'Harper Lee' },
            { name: 'George Orwell' },
            { name: 'F. Scott Fitzgerald' },
        ];
        yield author_1.default.bulkCreate(authorsData);
        console.log('Authors seeded successfully.');
    }
    catch (error) {
        console.error('Error seeding authors:', error);
    }
});
exports.default = seedAuthors;
