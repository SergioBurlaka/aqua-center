"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWorkerByEmail = findWorkerByEmail;
const db_1 = __importDefault(require("../../config/db"));
async function findWorkerByEmail(email) {
    const { rows } = await db_1.default.query(`SELECT w.id, w.name, w.email, w.password, w.role_id, r.role AS role
     FROM workers w
     JOIN roles r ON r.id = w.role_id
     WHERE w.email = $1`, [email]);
    return rows[0] ?? null;
}
