import { Package } from "./package";
import { BoatTransport, Transport, TruckTransport } from "./transport";

export class LogistcSystem {
    private packages: Package[] = [];
    private transport: Transport = new TruckTransport();
    public addPackage(pkg: Package){
        this.packages.push(pkg);
    }

    public setTransport(transportType: "boat" | "truck"){
        switch(transportType){
            case "boat":
                this.transport = new BoatTransport();
                break;
            case "truck": 
                this.transport = new TruckTransport();
        }
    }
    
    public calculateTotalFreightCost(): number {
        let totalCost = 0;

        this.packages.forEach((pkg) => {
            totalCost += this.transport.calculateFreightCost(pkg);
        });
    
        return totalCost;
    }
}
