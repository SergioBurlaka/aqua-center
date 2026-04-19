"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const UserModel = __importStar(require("./user.model"));
const getAllUsers = async (_, res) => {
    const users = await UserModel.getUsers();
    res.json(users);
};
exports.getAllUsers = getAllUsers;
const getUser = async (req, res) => {
    const user = await UserModel.getUserById(Number(req.params.id));
    if (!user)
        return res.status(404).json({ error: "User not found" });
    res.json(user);
};
exports.getUser = getUser;
const createUser = async (req, res) => {
    const user = await UserModel.createUser(req.body);
    res.status(201).json(user);
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    const user = await UserModel.updateUser({ ...req.body, id: Number(req.params.id) });
    res.json(user);
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    await UserModel.deleteUser(Number(req.params.id));
    res.status(204).send();
};
exports.deleteUser = deleteUser;
