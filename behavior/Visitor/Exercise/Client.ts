import Component from "./Component";
import ConcreteComponentA from "./ConcreteComponentA";
import ConcreteComponentB from "./ConcreteComponentB";
import ConcreteVisitor1 from "./ConcreteVisitor1";
import ConcreteVisitor2 from "./ConcreteVisitor2";
import Visitor from "./Visitor";

function clientCode(component:Component, visitor:Visitor) {
    component.accept(visitor);
}

const a = new ConcreteComponentA();
const av = new ConcreteVisitor1;
const bv = new ConcreteVisitor2;
clientCode(a, av);
clientCode(a, bv);
const b = new ConcreteComponentB();
clientCode(b, av);
clientCode(b, bv);