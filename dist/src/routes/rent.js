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
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const errors_1 = __importDefault(require("../controllers/errors"));
const router = express_1.default.Router();
router.post('/rent', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("....");
    try {
        console.log("1");
        const user = req.user;
        console.log("2");
        if (user) {
            const id = user.id;
            res.json({ message: 'Book rented successfully' });
        }
        else {
            throw new Error("Error in user");
        }
    }
    catch (error) {
        res.status(500).json({ error: (0, errors_1.default)(error) });
    }
}));
exports.default = router;
