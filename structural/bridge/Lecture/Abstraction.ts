import Implementation from "./Implementation";

export default class Abstraction {
    protected implementation!:Implementation;
    constructor(implementation:Implementation) {
        this.implementation = implementation;
    }
    /**
     * operation
     */
    public operation():string {
        const res = this.implementation.operationImplementation();
        return `Abstraction: base operatioin with: \n ${res}`;
    }
};
