import Component from "./Component";

export default class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponentA.';
  }
  
};
