import Abstraction from "./Abstraction";
import ConcreteImplementationA from "./ConcreteImplementationA";
import ConcreteImplementationB from "./ConcreteImplementationB";
import ExtendedAbstraction from "./ExtendedAbstraction";

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);

function clientCode(abstraction: Abstraction) {
    console.log(abstraction.operation());
}