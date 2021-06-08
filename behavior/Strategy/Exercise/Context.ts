import Strategy from "./Strategy";

export default class Context {
  strategy:Strategy;
  constructor(strategy:Strategy) {
    this.strategy = strategy;
  }
  /**
   * setStrategy
   */
  public setStrategy(strategy:Strategy) {
    this.strategy = strategy;
  }

  /**
   * doSomething
   */
  public doSomething(data:string[]) {
    console.log(this.strategy.doAlgorithm(data));
    
  }
};
