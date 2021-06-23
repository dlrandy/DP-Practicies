import ExtendedAbstraction from "./ExtendedAbstraction";
import Abstraction from "./Abstraction";
import ConcreteImplementationA from "./ConcreteImplementationA";
import ConcreteImplementationB from "./ConcreteImplementationB";

const a = new  ConcreteImplementationA();
const b = new  ConcreteImplementationB();


const ab = new Abstraction(a);
ab.operation();

const ab2 = new ExtendedAbstraction(b);
ab2.operation();



