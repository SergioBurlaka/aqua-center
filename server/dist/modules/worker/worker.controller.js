"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const worker_schema_1 = require("./worker.schema");
const worker_model_1 = require("./worker.model");
async function login(req, res) {
    try {
        const { email, password } = worker_schema_1.workerLoginSchema.parse(req.body);
        const worker = await (0, worker_model_1.findWorkerByEmail)(email);
        if (!worker)
            return res.status(401).json({ error: "Invalid credentials" });
        const ok = await bcryptjs_1.default.compare(password, worker.password);
        if (!ok)
            return res.status(401).json({ error: "Invalid credentials" });
        const secret = process.env.JWT_SECRET;
        if (!secret)
            return res.status(500).json({ error: "JWT secret not configured" });
        const token = jsonwebtoken_1.default.sign({ sub: worker.id, email: worker.email, role: worker.role }, secret, { expiresIn: "7d" });
        return res.json({
            token,
            worker: {
                id: worker.id,
                name: worker.name,
                email: worker.email,
                role: worker.role,
            },
        });
    }
    catch (e) {
        if (e?.errors)
            return res.status(400).json({ error: e.errors });
        return res.status(500).json({ error: "Unexpected error" });
    }
}
