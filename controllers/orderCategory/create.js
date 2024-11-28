"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderCategory = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const orderCategoryModel_1 = require("../../models/orderCategoryModel");
const orderCategorySchema_1 = require("../../schemas/orderCategorySchema");
const logger_1 = __importDefault(require("../../utilities/logger"));
const createOrderCategory = async (req, res) => {
    const { error, value } = (0, validateRequest_1.validateRequest)(orderCategorySchema_1.createOrderCategorySchema, req.body);
    if (error) {
        const message = `Invalid request body! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const orderCategory = await orderCategoryModel_1.OrderCategoryModel.create(value);
        const response = response_1.ResponseData.success(orderCategory);
        logger_1.default.info('Order Category created successfully');
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.createOrderCategory = createOrderCategory;
