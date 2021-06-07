import Stratefy from "./Strategy";

export default class ConcreteStrategyB implements Stratefy {
    doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
    
};
