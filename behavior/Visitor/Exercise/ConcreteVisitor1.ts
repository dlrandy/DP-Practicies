import ConcreteComponentA from "./ConcreteComponentA";
import ConcreteComponentB from "./ConcreteComponentB";
import Visitor from "./Visitor";

export default class ConcreteVisitor1 implements Visitor {
    doForCompA(compA:ConcreteComponentA): void {
        console.log('visitor1' + compA.specialMethodForVisitor());
        
    }
    doForCompB(compB:ConcreteComponentB): void {
        console.log('visitor1' + compB.specialMethodForVisitor()); 
    }
    
};
