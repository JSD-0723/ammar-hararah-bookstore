"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
const genre_1 = __importDefault(require("./genre"));
const author_1 = __importDefault(require("./author"));
const publisher_1 = __importDefault(require("./publisher"));
const auth_1 = __importDefault(require("./auth"));
const rent_1 = __importDefault(require("./rent"));
const home_1 = __importDefault(require("./home"));
const routes = {
    homeRoute: home_1.default,
    bookRoutes: book_1.default, genreRoutes: genre_1.default, authorRoutes: author_1.default,
    publisherRoutes: publisher_1.default, authRoutes: auth_1.default, rentRoutes: rent_1.default
};
exports.default = routes;
