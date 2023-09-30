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
const errors_1 = __importDefault(require("./errors"));
const author_1 = __importDefault(require("../models/author"));
class AuthorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const author = yield author_1.default.create(req.body);
                res.json(author);
            }
            catch (error) {
                res.status(500).json({ error: (0, errors_1.default)(error) });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const author = yield author_1.default.findByPk(req.params.id);
                res.json(author);
            }
            catch (error) {
                res.status(500).json({ error: (0, errors_1.default)(error) });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authors = yield author_1.default.findAll();
                res.json(authors);
            }
            catch (error) {
                res.status(500).json({ error: (0, errors_1.default)(error) });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield author_1.default.update(req.body, {
                    where: {
                        id: req.params.id,
                    },
                });
                res.json({ message: 'Author updated successfully' });
            }
            catch (error) {
                res.status(500).json({ error: (0, errors_1.default)(error) });
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield author_1.default.destroy({
                    where: {
                        id: req.params.id,
                    },
                });
                res.json({ message: 'Author deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ error: (0, errors_1.default)(error) });
            }
        });
    }
}
exports.default = new AuthorController();
