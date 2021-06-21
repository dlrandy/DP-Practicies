import Adaptee from "./Adaptee";
import Target from "./Target";

export default class Adaptor extends Target {
  private adaptee:Adaptee;
  constructor(adaptee:Adaptee) {
    super();
    this.adaptee = adaptee;
  }
  public request():string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adaptor: (TRANSLATED) ${result}`;
  }
};
