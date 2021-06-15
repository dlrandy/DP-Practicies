import Command from "./Command";
import Receiver from "./Receiver";
export default class ComplexCommand implements Command {
    private receiver:Receiver;
    private a: string;
    private b: string;
    constructor(receiver:Receiver, a: string, b: string) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    execute(): void {
        console.log('ComplexCommand: complex stuff');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
        
    }
  
}