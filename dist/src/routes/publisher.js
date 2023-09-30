"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const publisher_1 = __importDefault(require("../controllers/publisher"));
const router = express_1.default.Router();
router.post('/publishers', publisher_1.default.create);
router.get('/publishers/:id', publisher_1.default.getById);
router.get('/publishers', publisher_1.default.getAll);
router.put('/publishers/:id', publisher_1.default.update);
router.delete('/publishers/:id', publisher_1.default.remove);
exports.default = router;
