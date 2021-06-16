import ComplexCommand from "./ComplexCommand";
import Invoker from "./Invoker";
import Receiver from "./Receiver";
import SimpleCommand from "./SimpleCommand";

 const simpleCommand = new SimpleCommand('the a');
 const receiver = new Receiver();
 const complexCommand = new ComplexCommand(receiver, 'the ma','the mb');
 const invoker = new Invoker();
 invoker.setOnStart(simpleCommand);
 invoker.setOnFinish(complexCommand);
 invoker.doSomethingImportant();