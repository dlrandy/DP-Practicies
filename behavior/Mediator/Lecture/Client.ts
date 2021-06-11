import Component1 from "./Component1";
import Component2 from "./Component2";
import ConcreteMediator from "./ConcreteMediator";
const component1 = new Component1();
const component2 = new Component2();
const concreteMediator =new ConcreteMediator(component1, component2);

console.log('client triggers operationA.');
component1.doA();

console.log('   ');
console.log('client triggers operationD.');
component2.doD()





