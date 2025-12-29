"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const orders_json_1 = __importDefault(require("../orders.json"));
console.clear();
var fileContent = "";
orders_json_1.default.forEach((order) => {
    if (order.status === "ERROR_RESERVE_DEVICE")
        fileContent += `"consignment-process_a${order.order}_${order.order}",\n`;
});
fs_1.default.writeFileSync("orders.txt", fileContent);
