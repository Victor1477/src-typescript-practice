import fs from "fs";
import orders from "../orders.json";

console.clear();

enum Configuration {
  ORDER_STATUS = "ERROR_RESERVE_DEVICE",
  ACTION_ID = "reserveStock",
}

var fileContent = `import de.hybris.platform.core.model.order.OrderModel
import de.hybris.platform.ordersplitting.model.ConsignmentModel
import de.hybris.platform.ordersplitting.model.ConsignmentProcessModel
import de.hybris.platform.processengine.BusinessProcessService
import de.hybris.platform.servicelayer.model.ModelService

BusinessProcessService businessProcessService = spring.getBean("businessProcessService");
ModelService modelService = spring.getBean("modelService");

String[] processCodes = [\n`;

orders.forEach((order) => {
  if (order.status === Configuration.ORDER_STATUS) {
    if (orders[orders.length - 1] !== order) {
      fileContent += `"consignment-process_a${order.order}_${order.order}",\n`;
    } else {
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

fs.writeFileSync("reprocess-orders.groovy", fileContent);
