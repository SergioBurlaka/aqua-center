"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const db_1 = __importDefault(require("../../config/db"));
async function getUsers() {
    const { rows } = await db_1.default.query("SELECT * FROM users ORDER BY id DESC");
    return rows;
}
async function getUserById(id) {
    const { rows } = await db_1.default.query("SELECT * FROM users WHERE id=$1", [id]);
    return rows[0];
}
async function createUser(data) {
    const { rows } = await db_1.default.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [data.name, data.email]);
    return rows[0];
}
async function updateUser(data) {
    const { rows } = await db_1.default.query("UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *", [data.name, data.email, data.id]);
    return rows[0];
}
async function deleteUser(id) {
    await db_1.default.query("DELETE FROM users WHERE id=$1", [id]);
}
