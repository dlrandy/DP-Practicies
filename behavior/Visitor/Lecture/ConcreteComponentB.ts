import Component from "./Component";
import Visitor from "./Visitor";

export default class ConcreteComponentB implements Component {
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this);
    }
    public specialMethodOfConcreteComponentB(): string {
        return 'B';
    }
};
