"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllProductsSchema = exports.findOneProductSchema = exports.deleteProductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createProductSchema = joi_1.default.object({
    productName: joi_1.default.string().max(255).required(),
    productImage: joi_1.default.string().optional(),
    productCategory: joi_1.default.string().max(100).allow('').optional(),
    productPrice: joi_1.default.number().positive().required(),
    productStockQuantity: joi_1.default.number().integer().required(),
    createdAt: joi_1.default.date().optional(),
    updatedAt: joi_1.default.date().optional()
});
exports.updateProductSchema = joi_1.default.object({
    productId: joi_1.default.number().integer().positive().required(),
    productName: joi_1.default.string().max(255).optional(),
    productImage: joi_1.default.string().optional(),
    productCategory: joi_1.default.string().max(100).allow('').optional(),
    productPrice: joi_1.default.number().positive().optional(),
    productStockQuantity: joi_1.default.number().integer().optional(),
    updatedAt: joi_1.default.date().optional()
});
exports.deleteProductSchema = joi_1.default.object({
    productId: joi_1.default.number().integer().positive().required()
});
exports.findOneProductSchema = joi_1.default.object({
    productId: joi_1.default.number().integer().positive().required()
});
exports.findAllProductsSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
