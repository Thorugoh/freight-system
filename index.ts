import { LogistcSystem } from "./src/logisticsSystem";
import { Package } from "./src/package";

(function main(){
    const system = new LogistcSystem();
    system.addPackage(new Package(1, 2, 3, 4));
    system.addPackage(new Package(2, 2, 2, 2));

    console.log(`Total cost with Truck: ${system.calculateTotalFreightCost()}`);

    system.setTransport("boat");

    console.log(`Total cost with Boat: ${system.calculateTotalFreightCost()}`);
})();