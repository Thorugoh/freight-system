import { BASE_PRICE } from "./constants";
import { Package } from "./package";

export interface Transport {
    calculateFreightCost(cargo: Package): number;
}

export class BoatTransport implements Transport {
    private typeFactor = 1.2;

    calculateFreightCost(cargo: Package): number {
        const volume = cargo.getVolume();
        const { weight } = cargo.getSize();

        const cost = BASE_PRICE * volume * weight;
        return cost * this.typeFactor;
    }
}

export class TruckTransport implements Transport {
    private typeFactor = 1;

    calculateFreightCost(cargo: Package): number {
        const volume = cargo.getVolume();
        const { weight } = cargo.getSize();

        const cost = BASE_PRICE * volume * weight;
        return cost * this.typeFactor;
    }
}
