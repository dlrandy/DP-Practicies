import Strategy from "./Strategy";

export default class ConcreteStrategyB implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
    
};
