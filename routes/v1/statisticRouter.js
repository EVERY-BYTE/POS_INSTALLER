"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statistic_1 = require("../../controllers/statistic");
const router = (0, express_1.Router)();
router.get('/', statistic_1.statisticController.findTotal);
exports.default = router;
