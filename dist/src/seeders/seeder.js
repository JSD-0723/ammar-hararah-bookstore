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
const db_1 = __importDefault(require("../config/db"));
const author_1 = __importDefault(require("./author"));
const publisher_1 = __importDefault(require("./publisher"));
const genre_1 = __importDefault(require("./genre"));
const book_1 = __importDefault(require("./book"));
const user_1 = __importDefault(require("./user"));
const runSeeders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.sync({ force: true });
        yield (0, author_1.default)(db_1.default);
        yield (0, publisher_1.default)(db_1.default);
        yield (0, genre_1.default)(db_1.default);
        yield (0, book_1.default)(db_1.default);
        yield (0, user_1.default)(db_1.default);
        console.log('Seeding process completed successfully.');
    }
    catch (error) {
        console.error('Error in seeding process:', error);
    }
    finally {
        yield db_1.default.close();
    }
});
runSeeders();
