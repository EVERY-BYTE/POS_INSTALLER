"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllOrderCategoriesSchema = exports.findOneOrderCategorySchema = exports.deleteOrderCategorySchema = exports.updateOrderCategorySchema = exports.createOrderCategorySchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Schema for creating a new OrderCategory
exports.createOrderCategorySchema = joi_1.default.object({
    orderCategoryName: joi_1.default.string().max(255).required(),
    createdAt: joi_1.default.date().optional(),
    updatedAt: joi_1.default.date().optional()
});
// Schema for updating an existing OrderCategory
exports.updateOrderCategorySchema = joi_1.default.object({
    orderCategoryId: joi_1.default.number().integer().positive().required(),
    orderCategoryName: joi_1.default.string().max(255).optional(),
    updatedAt: joi_1.default.date().optional()
});
// Schema for deleting an OrderCategory
exports.deleteOrderCategorySchema = joi_1.default.object({
    orderCategoryId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching a single OrderCategory
exports.findOneOrderCategorySchema = joi_1.default.object({
    orderCategoryId: joi_1.default.number().integer().positive().required()
});
// Schema for fetching all OrderCategories with pagination and search support
exports.findAllOrderCategoriesSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
