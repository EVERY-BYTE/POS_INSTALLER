"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneSale = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../utilities/validateRequest");
const response_1 = require("../../utilities/response");
const saleModel_1 = require("../../models/saleModel");
const salesItemModel_1 = require("../../models/salesItemModel");
const saleSchema_1 = require("../../schemas/saleSchema");
const logger_1 = __importDefault(require("../../utilities/logger"));
const productModel_1 = require("../../models/productModel");
const findOneSale = async (req, res) => {
    console.log(req.params);
    const { error, value } = (0, validateRequest_1.validateRequest)(saleSchema_1.findOneSaleSchema, req.params);
    if (error) {
        const message = `Invalid request parameters! ${error.details.map((x) => x.message).join(', ')}`;
        logger_1.default.warn(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response_1.ResponseData.error(message));
    }
    try {
        const sale = await saleModel_1.SaleModel.findOne({
            where: {
                deleted: 0,
                saleId: value.saleId
            },
            include: [
                {
                    model: salesItemModel_1.SalesItemModel,
                    as: 'salesItems',
                    attributes: [
                        'createdAt',
                        'salesItemId',
                        'saleId',
                        'productId',
                        'salesItemQuantity',
                        'salesItemPrice',
                        'salesItemSubtotal'
                    ],
                    include: [
                        {
                            model: productModel_1.ProductModel,
                            as: 'product',
                            attributes: [
                                'productName',
                                'productCategory',
                                'productPrice',
                                'productStockQuantity',
                                'productCode'
                            ]
                        }
                    ]
                }
            ],
            attributes: [
                'createdAt',
                'saleId',
                'saleTotalAmount',
                'salePaymentMethod',
                'salesCode',
                'salesDeliverCompanyName',
                'salesDeliverCompanyAddress'
            ]
        });
        if (!sale) {
            const message = `Sale not found with ID: ${value.saleId}`;
            logger_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error(message));
        }
        const response = response_1.ResponseData.success(sale);
        logger_1.default.info('Sale found successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `Unable to process request! Error: ${error.message}`;
        logger_1.default.error(message, { stack: error.stack });
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response_1.ResponseData.error(message));
    }
};
exports.findOneSale = findOneSale;
