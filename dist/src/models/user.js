"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = __importDefault(require("../config/db"));
class User extends sequelize_1.Model {
    comparePassword(password) {
        return bcrypt_1.default.compareSync(password, this.password);
    }
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    modelName: 'User',
    tableName: 'users',
    hooks: {
        beforeCreate: (user) => {
            const salt = bcrypt_1.default.genSaltSync();
            user.password = bcrypt_1.default.hashSync(user.password, salt);
        },
        beforeUpdate: (user) => {
            if (user.changed('password')) {
                const salt = bcrypt_1.default.genSaltSync();
                user.password = bcrypt_1.default.hashSync(user.password, salt);
            }
        },
    },
});
exports.default = User;
