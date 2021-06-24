import ConcreteComponent from "./ConcreteComponent";
import ConcreteDecoratorA from "./ConcreteDecoratorA";
import ConcreteDecoratorB from "./ConcreteDecoratorB";
import Decorator from "./Decorator";

const simple = new ConcreteComponent();
console.log(`simple ${simple.operation()}`);

const decorator = new Decorator(simple);
console.log(`base ${decorator.operation()}`);

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log(`decorator2 ${decorator2.operation()}`);



