"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: config_1.DB_HOST,
    username: config_1.DB_USERNAME,
    database: config_1.DB_NAME,
    password: config_1.DB_PASSWORD
});
exports.default = sequelize;
