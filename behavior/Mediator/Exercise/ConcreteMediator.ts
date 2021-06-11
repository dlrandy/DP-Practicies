import BaseComponent from "./BaseComponent";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Mediator from "./Mediator";

export default class ConcreteMediator implements Mediator {
  private component1:Component1;
  private component2:Component2;
  constructor(component1:Component1, component2:Component2) {
    this.component1 = component1;
    this.component2 = component2;

    this.component1.setMediator(this);
    this.component2.setMediator(this);
  }
  notify(sender: BaseComponent, event: string): void {
    if (event === 'A') {
      console.log('notify event A...');
      this.component2.doC();
    }
    if (event === 'C') {
      console.log('notify event C...');
      this.component1.doB();
      this.component2.doD();
    }


  }
  
};
