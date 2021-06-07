import Stratefy from "./Strategy";

export default class ConcreteStrategyA implements Stratefy {
    doAlgorithm(data: string[]): string[] {
        return data.sort();
        
    }
    
};
