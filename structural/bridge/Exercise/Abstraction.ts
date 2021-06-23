import Implementation from "./Implementation";

export default class Abstraction {
    protected implementation!:Implementation;
    constructor(implementation:Implementation) {
        this.implementation = implementation;
    }

    /**
     * operation
     */
    public operation() {
        console.log(this.implementation.implementationOperation());
        
    }
};
