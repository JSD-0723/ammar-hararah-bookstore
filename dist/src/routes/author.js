"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const author_1 = __importDefault(require("../controllers/author"));
const router = express_1.default.Router();
router.post('/authors', author_1.default.create);
router.get('/authors/:id', author_1.default.getById);
router.get('/authors', author_1.default.getAll);
router.put('/authors/:id', author_1.default.update);
router.delete('/authors/:id', author_1.default.remove);
exports.default = router;
