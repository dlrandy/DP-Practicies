import Strategy from "./Strategy";

export default class ConcreteStrategyA implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
    
};
