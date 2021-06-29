import Product from "./Product";

export default class ConcreteProduct1 implements Product {
    
    operation(): string {
        return 'ConcreteProduct1 operation.';
    }
};
