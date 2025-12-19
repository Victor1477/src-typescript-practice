"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
console.clear();
const orders = [];
var fileContent = "";
orders.forEach((order) => {
    if (order.status === "ERROR_OV_CREATION")
        fileContent += `"consignment-process_a${order.order}_${order.order}",\n`;
});
fs_1.default.writeFileSync("orders.txt", fileContent);
