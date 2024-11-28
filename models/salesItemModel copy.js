"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesItemModel = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
const saleModel_1 = require("./saleModel");
const productModel_1 = require("./productModel");
const zygote_1 = require("./zygote");
exports.SalesItemModel = index_1.sequelize.define('SalesItem', {
    ...zygote_1.ZygoteModel,
    salesItemId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    saleId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: saleModel_1.SaleModel,
            key: 'saleId'
        }
    },
    productId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: productModel_1.ProductModel,
            key: 'productId'
        }
    },
    salesItemQuantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    salesItemPrice: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    salesItemSubtotal: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'sales_items',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
exports.SalesItemModel.belongsTo(productModel_1.ProductModel, {
    as: 'product',
    foreignKey: 'productId'
});
