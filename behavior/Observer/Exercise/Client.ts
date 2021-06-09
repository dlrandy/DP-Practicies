import ConcreteObserverA from "./ConcreteObserverA";
import ConcreteObserverB from "./ConcreteObserverB";
import ConcreteSubject from "./ConcreteSubject";

const subject = new ConcreteSubject();
const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.attach(observerA)
subject.attach(observerB)
subject.doSomeBusinessLogic()
subject.doSomeBusinessLogic()
subject.detach(observerB)
subject.doSomeBusinessLogic()
subject.doSomeBusinessLogic()