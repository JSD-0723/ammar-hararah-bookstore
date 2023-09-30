"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const genre_1 = __importDefault(require("../controllers/genre"));
const router = express_1.default.Router();
router.post('/genres', genre_1.default.create);
router.get('/genres/:id', genre_1.default.getById);
router.get('/genres', genre_1.default.getAll);
router.put('/genres/:id', genre_1.default.update);
router.delete('/genres/:id', genre_1.default.remove);
exports.default = router;
