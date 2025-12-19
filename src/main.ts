import fs from "fs";

console.clear();

const orders = [];

var fileContent = "";

orders.forEach((order) => {
  if (order.status === "ERROR_OV_CREATION")
    fileContent += `"consignment-process_a${order.order}_${order.order}",\n`;
});

fs.writeFileSync("orders.txt", fileContent);
