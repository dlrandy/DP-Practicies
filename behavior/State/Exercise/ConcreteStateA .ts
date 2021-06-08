import ConcreteStateB from "./ConcreteStateB";
import State from "./State";

export default class ConcreteStateA extends State {
    public handle1(): void {
        console.log('A handles request1');
        
     }
     public handle2(): void {
        console.log('A handles request2');
        console.log('A wants to chnage state to B');
        this.context.transitionTo(new ConcreteStateB())
        
        
     }
 
    
};
