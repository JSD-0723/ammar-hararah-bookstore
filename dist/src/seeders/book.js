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
const book_1 = __importDefault(require("../models/book"));
const seedBooks = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booksData = [
            {
                title: 'To Kill a Mockingbird',
                authorId: 1,
                publisherId: 1,
                genreId: 1,
            },
            {
                title: '1984',
                authorId: 2,
                publisherId: 2,
                genreId: 2,
            },
            {
                title: 'The Great Gatsby',
                authorId: 3,
                publisherId: 3,
                genreId: 3,
            },
        ];
        yield book_1.default.bulkCreate(booksData);
        console.log('Books seeded successfully.');
    }
    catch (error) {
        console.error('Error seeding books:', error);
    }
});
exports.default = seedBooks;
