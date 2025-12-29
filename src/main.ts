import fs from "fs";
import orders from "../orders.json";

console.clear();

var fileContent = "";

orders.forEach((order) => {
  if (order.status === "ERROR_RESERVE_DEVICE")
    fileContent += `"consignment-process_a${order.order}_${order.order}",\n`;
});

fs.writeFileSync("orders.txt", fileContent);
