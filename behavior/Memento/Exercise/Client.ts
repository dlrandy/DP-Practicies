import Caretaker from "./Caretaker";
import Originator from "./Originator";

const originator = new Originator('initial state..');
const caretaker = new Caretaker(originator);

caretaker.backup();
console.log(originator.getState());

originator.doSomeBusinessLogic()
caretaker.backup();
console.log(originator.getState());

originator.doSomeBusinessLogic()
console.log(originator.getState());
caretaker.backup();
console.log('---------------');
caretaker.undo()
console.log(originator.getState());
caretaker.undo()
console.log(originator.getState());
