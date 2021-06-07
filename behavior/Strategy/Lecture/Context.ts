import Strategy from "./Strategy";
export default class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  doThings(data: string[] = []) {
    const result = this.strategy.doAlgorithm(data);;
    console.log(result.join(','));
    
  }
}
