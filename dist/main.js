"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
console.clear();
const app = (0, express_1.default)();
var SERVER_CONFIGURATION;
(function (SERVER_CONFIGURATION) {
    SERVER_CONFIGURATION[SERVER_CONFIGURATION["PORT"] = 4202] = "PORT";
})(SERVER_CONFIGURATION || (SERVER_CONFIGURATION = {}));
app.use("/", (req, res, next) => {
    res.send({ message: "Sucess" });
});
app.listen(SERVER_CONFIGURATION.PORT, () => {
    console.log(`Server listening on port ${SERVER_CONFIGURATION.PORT}`);
});
