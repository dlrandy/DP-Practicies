import ConcreteStateA from "./ConcreteStateA ";
import State from "./State";

 export default class ConcreteStateB extends State {
     public handle1(): void {
        console.log('B handles request1');
        
     }
     public handle2(): void {
        console.log('B handles request2');
        console.log('B wants to chnage state to A');
        this.context.transitionTo(new ConcreteStateA())
        
        
     }
     
 };
 