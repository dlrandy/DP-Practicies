import Abstraction from "./Abstraction";

export default class ExtendedAbstraction extends Abstraction {
    public operation() {
        console.log('ExtendedAbstraction....');
       console.log(this.implementation.implementationOperation());
        
    }
};
