"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTotal = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const user_1 = require("../../models/user");
const saleModel_1 = require("../../models/saleModel");
const salesItemModel_1 = require("../../models/salesItemModel");
const findTotal = async (req, res) => {
    try {
        const totalTransaction = await saleModel_1.SaleModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        const totalItemSales = await salesItemModel_1.SalesItemModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        const totalSuperAdmin = await user_1.UserModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userRole: { [sequelize_1.Op.eq]: 'superAdmin' }
            }
        });
        const totalAdmin = await user_1.UserModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userRole: { [sequelize_1.Op.eq]: 'admin' }
            }
        });
        const totalUser = await user_1.UserModel.count({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userRole: { [sequelize_1.Op.eq]: 'user' }
            }
        });
        const response = response_1.ResponseData.success({
            totalTransaction,
            totalItemSales,
            totalSuperAdmin,
            totalAdmin,
            totalUser
        });
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findTotal = findTotal;
