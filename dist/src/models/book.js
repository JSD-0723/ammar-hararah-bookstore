"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const author_1 = __importDefault(require("./author"));
const publisher_1 = __importDefault(require("./publisher"));
const genre_1 = __importDefault(require("./genre"));
class Book extends sequelize_1.Model {
}
Book.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: author_1.default,
            key: 'id',
        },
    },
    publisherId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: publisher_1.default,
            key: 'id',
        },
    },
    genreId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: genre_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: db_1.default,
    modelName: 'Book',
    tableName: 'books',
});
exports.default = Book;
