"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./modules/user/user.routes"));
const worker_routes_1 = __importDefault(require("./modules/worker/worker.routes"));
const client_routes_1 = __importDefault(require("./modules/client/client.routes"));
const app = (0, express_1.default)();
// Enable CORS for all origins (development)
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/users", user_routes_1.default);
app.use("/api/workers", worker_routes_1.default);
app.use("/api/clients", client_routes_1.default);
exports.default = app;
