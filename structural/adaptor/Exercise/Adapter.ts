import Adaptee from "./Adaptee";
import Target from "./Target";

export default class Adaptor extends Target {
  private adaptee!:Adaptee;
  constructor(adaptee:Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  /**
   * doRequest
   */
  public doRequest(str:string):string {
    console.log(`Adapter the specific request: \n`);
    let res = this.adaptee.doSpecificRequest(str).split('').reverse().join('').blink();
    return res;
  }
};
