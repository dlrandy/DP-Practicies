import Component from "./Component";
import Visitor from "./Visitor";

export default class ConcreteComponentA implements Component {
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }
    public exclusiveMethodOfConcreteComponentA(): string {
        return 'A';
    }
};
