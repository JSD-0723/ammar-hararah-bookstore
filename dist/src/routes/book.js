"use strict";
// src/routes/books.route.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = __importDefault(require("../controllers/book"));
const router = express_1.default.Router();
router.post('/books', book_1.default.create);
router.get('/books/:id', book_1.default.getById);
router.get('/books', book_1.default.getAll);
router.put('/books/:id', book_1.default.update);
router.delete('/books/:id', book_1.default.remove);
exports.default = router;
