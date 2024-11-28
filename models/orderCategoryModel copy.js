"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCategoryModel = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const zygote_1 = require("./zygote");
exports.OrderCategoryModel = index_1.sequelize.define('OrderCategory', {
    ...zygote_1.ZygoteModel,
    orderCategoryId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    orderCategoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'order_category',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
