import ConcreteSubject from "./ConcreteSubject";
import Observer from "./Observer";
import Subject from "./Subject";

 export default class ConcreteObserverB implements Observer {
   update(subject: Subject): void {
     if(subject instanceof ConcreteSubject && subject.state >= 3){
      console.log('ConcreteObserverB reacting to event');
      
     }
   }
   
 };
 