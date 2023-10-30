export class Package {
    constructor(private length: number, private width: number, private height: number, private weight: number){}

    getVolume(): number {
        return this.length * this.height * this.width;
    }

    getSize(): {
        lenght: number;
        width: number;
        height: number;
        weight: number;
    } {
        return { lenght: this.length, width: this.width, height: this.height, weight: this.weight };
    }
}