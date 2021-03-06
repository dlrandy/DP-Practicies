import Abstraction from "./Abstraction";

export default class ExtendedAbstraction extends Abstraction {
    /**
     * operation
     */
    public operation():string {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended operation with:\n${result}`;
    }
};
