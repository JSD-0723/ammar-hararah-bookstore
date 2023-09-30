"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./src/config/db"));
const router_1 = __importDefault(require("./src/routes/router"));
const passport_1 = __importDefault(require("./src/auth/passport"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(passport_1.default.initialize());
app.use(body_parser_1.default.json());
app.use(router_1.default.authRoutes);
app.use(router_1.default.bookRoutes);
app.use(router_1.default.genreRoutes);
app.use(router_1.default.authorRoutes);
app.use(router_1.default.publisherRoutes);
app.use(router_1.default.rentRoutes);
db_1.default.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
