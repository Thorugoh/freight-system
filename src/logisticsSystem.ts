import { Package } from "./package";
import { BoatTransport, Transport, TruckTransport } from "./transport";

export class LogistcSystem {
    private packages: Package[] = [];
    private transport: Transport;
    
    constructor(initialTransport: Transport) {
        this.transport = initialTransport;
    }

    public addPackage(pkg: Package){
        this.packages.push(pkg);
    }

    public setTransport(newTransport: Transport){
        this.transport = newTransport;
    }
    
    public calculateTotalFreightCost(): number {
        let totalCost = 0;

        this.packages.forEach((pkg) => {
            totalCost += this.transport.calculateFreightCost(pkg);
        });
    
        return totalCost;
    }
}
