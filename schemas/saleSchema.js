"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSaleSchema = exports.findOneSaleSchema = exports.updateSaleSchema = exports.createSaleSchema = exports.findAllSalesSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.findAllSalesSchema = joi_1.default.object({
    page: joi_1.default.number().integer().default(0),
    size: joi_1.default.number().integer().default(10),
    search: joi_1.default.string().allow('').optional(),
    salesCategory: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().allow('').optional(),
    startDate: joi_1.default.string().allow('').optional(),
    endDate: joi_1.default.string().allow('').optional()
});
exports.createSaleSchema = joi_1.default.object({
    saleTotalAmount: joi_1.default.number().positive().required(),
    salePaymentMethod: joi_1.default.string().required(),
    salesCategory: joi_1.default.string().required(),
    salesDeliverCompanyName: joi_1.default.string().required(),
    salesDeliverCompanyAddress: joi_1.default.string().required(),
    salesItems: joi_1.default.array()
        .items(joi_1.default.object({
        productId: joi_1.default.number().integer().positive().required(),
        salesItemQuantity: joi_1.default.number().integer().positive().required(),
        salesItemPrice: joi_1.default.number().positive().required(),
        salesItemSubtotal: joi_1.default.number().positive().required()
    }))
        .required()
});
exports.updateSaleSchema = joi_1.default.object({
    saleId: joi_1.default.number().integer().positive().required(),
    saleTotalAmount: joi_1.default.number().positive().required(),
    salePaymentMethod: joi_1.default.string().required(),
    salesCategory: joi_1.default.string().required(),
    salesDeliverCompanyName: joi_1.default.string().required(),
    salesDeliverCompanyAddress: joi_1.default.string().required(),
    salesItems: joi_1.default.array().items(joi_1.default.object({
        productId: joi_1.default.number().integer().positive().required(),
        salesItemQuantity: joi_1.default.number().integer().positive().required(),
        salesItemPrice: joi_1.default.number().positive().required(),
        salesItemSubtotal: joi_1.default.number().positive().required()
    }))
});
exports.findOneSaleSchema = joi_1.default.object({
    saleId: joi_1.default.number().integer().positive().required()
});
exports.deleteSaleSchema = joi_1.default.object({
    saleId: joi_1.default.number().integer().positive().required()
});
