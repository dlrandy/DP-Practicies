import ConcreteSubject from "./ConcreteSubject";
import Observer from "./Observer";

export default class ConcreteObserverA implements Observer {
  update(subject: ConcreteSubject): void {
    if (subject.state <= 5) {
      console.log('AAAAA reacting.');
      
    }
  }
  
};
