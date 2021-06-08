import ConcreteComponentA from "./ConcreteComponentA";
import ConcreteComponentB from "./ConcreteComponentB";
import Visitor from "./Visitor";

 export default class ConcreteVisitor2 implements Visitor {
    doForCompA(compA:ConcreteComponentA): void {
        console.log('visitor2' + compA.specialMethodForVisitor());
    }
    doForCompB(compB:ConcreteComponentB): void {
        console.log('visitor2' + compB.specialMethodForVisitor());
    }
     
 };
 