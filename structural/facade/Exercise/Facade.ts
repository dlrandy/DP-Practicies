import Subsystem1 from "./Subsystem1";
import Subsystem2 from "./Subsystem2";

export default class Facade {
  private subsystem1:Subsystem1;
  private subsystem2:Subsystem2;
  constructor(subsystem1:Subsystem1 = new Subsystem1, subsystem2:Subsystem2 = new Subsystem2) {
    this.subsystem1 = subsystem1 ;
    this.subsystem2 = subsystem2 ;
  }

  /**
   * operation
   */
  public operation() {
    this.subsystem1.operation1();
    this.subsystem2.operationZ();
  }
};
