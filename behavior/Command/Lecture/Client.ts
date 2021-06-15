import ComplexCommand from "./ComplexCommand";
import Invoker from "./Invoker";
import Receiver from "./Receiver";
import SimpleCommand from './SimpleCommand'
const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('hi'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'send email', 'save report'))
invoker.doSomethingImportant();