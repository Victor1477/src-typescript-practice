"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const orders_json_1 = __importDefault(require("../orders.json"));
console.clear();
var Configuration;
(function (Configuration) {
    Configuration["ORDER_STATUS"] = "ERROR_RESERVE_DEVICE";
    Configuration["ACTION_ID"] = "reserveStock";
})(Configuration || (Configuration = {}));
var fileContent = `import de.hybris.platform.core.model.order.OrderModel
import de.hybris.platform.ordersplitting.model.ConsignmentModel
import de.hybris.platform.ordersplitting.model.ConsignmentProcessModel
import de.hybris.platform.processengine.BusinessProcessService
import de.hybris.platform.servicelayer.model.ModelService

BusinessProcessService businessProcessService = spring.getBean("businessProcessService");
ModelService modelService = spring.getBean("modelService");

String[] processCodes = [\n`;
orders_json_1.default.forEach((order) => {
    if (order.status === Configuration.ORDER_STATUS) {
        if (orders_json_1.default[orders_json_1.default.length - 1] !== order) {
            fileContent += `"consignment-process_a${order.order}_${order.order}",\n`;
        }
        else {
            fileContent += `"consignment-process_a${order.order}_${order.order}"`;
        }
    }
});
fileContent += `\n]

for (String processCode : processCodes) {
    ConsignmentProcessModel process = businessProcessService.getProcess(processCode)
    if (process != null) {
        println("Reprocessando: " + processCode)
        businessProcessService.restartProcess(process, "${Configuration.ACTION_ID}");
    } else {
        println("Processo não encontrado: " + processCode);
    }
}`;
fs_1.default.writeFileSync("reprocess-orders.groovy", fileContent);
