"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workerLoginSchema = void 0;
const zod_1 = require("zod");
exports.workerLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6).max(255),
});
