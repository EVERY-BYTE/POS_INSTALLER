"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticController = void 0;
const chart_1 = require("./chart");
const total_1 = require("./total");
const report_1 = require("./report");
exports.statisticController = { findTotal: total_1.findTotal, findChart: chart_1.findChart, findReportTotals: report_1.findReportTotals };
