import Builder from "./Builder";
import Product1 from "./Product1";

export default class ConcreteBuilder1 implements Builder {
    private product1!:Product1;
    constructor() {
        this.reset();
    }
    producePartA(): void {
        this.product1.addPart('partA');
    }
    producePartB(): void {
        this.product1.addPart('partB');
    }
    producePartC(): void {
        this.product1.addPart('partC');
    }
    private reset() {
        this.product1 = new Product1();

    }
    public getProduct() {
        const result = this.product1;
        this.reset()
        return result;
    }
};
