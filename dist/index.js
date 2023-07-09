"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DBConnect_1 = __importDefault(require("./connection/DBConnect"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
(0, DBConnect_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Importing routes
const routes_1 = __importDefault(require("./routes"));
app.use("/", routes_1.default);
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.listen(config_1.default.port, () => {
    console.log(`Cow Hut app listening on port ${config_1.default.port}`);
});
//# sourceMappingURL=index.js.map