import Product from "./Product";

export default class ConcreteProduct2 implements Product {
    operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
    
};