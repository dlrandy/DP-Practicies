import Component1 from "./Component1";
import Component2 from "./Component2";
import Mediator from "./Mediator";

export default class ConcreteMediator implements Mediator {
  private component1: Component1;
  private component2: Component2;

  constructor(component1: Component1, component2: Component2) {
    this.component1 = component1;
    this.component2 = component2;
    this.component1.setMedaitor(this);
    this.component2.setMedaitor(this);
  }
  notify(sender: object, event: string): void {
    if (event === 'A') {
        console.log('Mediator reacts on A and triggers following operations:');
        this.component2.doC();
    }

    if (event === 'D') {
        console.log('Mediator reacts on D and triggers following operations:');
        this.component1.doB();
        this.component2.doC();
    }
  }
}
