"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("./client.controller");
const router = (0, express_1.Router)();
router.get("/", client_controller_1.getClientsFromAppSheet);
exports.default = router;
