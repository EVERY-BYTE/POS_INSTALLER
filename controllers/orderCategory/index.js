"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCategoryControllers = void 0;
const create_1 = require("./create");
const findAll_1 = require("./findAll");
const findOne_1 = require("./findOne");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.orderCategoryControllers = {
    findAll: findAll_1.findAllOrderCategories,
    findOne: findOne_1.findOrderCategory,
    create: create_1.createOrderCategory,
    update: update_1.updateOrderCategory,
    remove: remove_1.removeOrderCategory
};
