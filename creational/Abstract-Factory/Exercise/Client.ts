import AbstractFactory from "./AbstractFactory";
import ConcreteFactory1 from "./ConcreteFactory1";
import ConcreteFactory2 from "./ConcreteFactory2";

function clientCode(factory:AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
    
    
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());