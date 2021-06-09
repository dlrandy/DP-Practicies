import ConcreteSubject from "./ConcreteSubject";
import Observer from "./Observer";

export default class ConcreteObserverB implements Observer {
  update(subject: ConcreteSubject): void {
    if (subject.state > 5) {
      console.log('BBBBB reacting.');
      
    }
  }
  
};
