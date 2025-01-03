"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const platform_1 = require("../../controllers/platform");
const router = (0, express_1.Router)();
router.get('/', platform_1.platformControllers.findAll);
router.get('/detail/:platformId', platform_1.platformControllers.findOne);
router.post('/', platform_1.platformControllers.create);
router.patch('/', platform_1.platformControllers.update);
router.delete('/:platformId', platform_1.platformControllers.remove);
exports.default = router;
