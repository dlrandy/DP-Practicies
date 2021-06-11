import Component1 from "./Component1";
import Component2 from "./Component2";
import ConcreteMediator from "./ConcreteMediator";

const component1 = new Component1();
const component2 = new Component2();

const mediator = new ConcreteMediator(component1, component2);

component1.doA();

component2.doC();