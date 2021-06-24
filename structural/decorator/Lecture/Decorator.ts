import Component from "./Component";

export default class Decorator implements Component {
  protected component: Component;
  constructor(component:Component) {
    this.component = component;
  }
  public operation(): string {
    return this.component.operation();
  }
  
};
