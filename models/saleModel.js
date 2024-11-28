"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleModel = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const user_1 = require("./user");
const zygote_1 = require("./zygote");
const salesItemModel_1 = require("./salesItemModel");
exports.SaleModel = index_1.sequelize.define('Sale', {
    ...zygote_1.ZygoteModel,
    saleId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: user_1.UserModel,
            key: 'userId'
        }
    },
    saleTotalAmount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    salesCode: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: false
    },
    salesCategory: {
        type: sequelize_1.DataTypes.STRING(250),
        allowNull: false
    },
    salesDeliverCompanyName: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    salesDeliverCompanyAddress: {
        type: sequelize_1.DataTypes.STRING(250),
        allowNull: false
    },
    salePaymentMethod: {
        type: sequelize_1.DataTypes.ENUM('cash', 'credit_card'),
        allowNull: true
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
exports.SaleModel.hasMany(salesItemModel_1.SalesItemModel, {
    as: 'salesItems',
    foreignKey: 'saleId'
});
