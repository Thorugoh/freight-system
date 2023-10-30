import { Transport, BoatTransport, TruckTransport } from "./transport";

export class TransportFactory {
  public createTransport(type: "boat" | "truck"): Transport {
    switch (type) {
      case "boat":
        return new BoatTransport();
      case "truck":
        return new TruckTransport();
      default:
        throw new Error("Invalid transport type");
    }
  }
}