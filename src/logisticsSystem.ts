import { Package } from "./package";
import { Transport, } from "./transport";
import { TransportFactory } from "./transportFactory";

export class LogistcSystem {
    private packages: Package[] = [];
    private transport: Transport;
    private transportFactory = new TransportFactory();
    
    constructor(initialTransport: "boat" | "truck") {
        this.transport = this.transportFactory.createTransport(initialTransport);
    }

    public addPackage(pkg: Package){
        this.packages.push(pkg);
    }

    public setTransport(newTransportType: "boat" | "truck") {
        this.transport = this.transportFactory.createTransport(newTransportType);  // Using the factory
    }
    
    public calculateTotalFreightCost(): number {
        let totalCost = 0;

        this.packages.forEach((pkg) => {
            totalCost += this.transport.calculateFreightCost(pkg);
        });
    
        return totalCost;
    }
}
