import Facade from "./Facade";
import Subsystem1 from "./Subsystem1";
import Subsystem2 from "./Subsystem2";

function clientCode(facade:Facade) {
  console.log(facade.operation());
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade)