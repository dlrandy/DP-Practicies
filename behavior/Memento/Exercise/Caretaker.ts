import Memento from "./Memento";
import Originator from "./Originator";

export default class Caretaker {
    originator:Originator;
    mementos: Memento[] = [];
    constructor(originator:Originator) {
        this.originator =originator;
    }

    backup(){
        this.mementos.push(this.originator.save());
    }

    undo(){
        if (this.mementos.length === 0) {
            return;
        }
        this.originator.restore(this.mementos.pop() as Memento)
    }

    getHistory(){
        return this.mementos.map(memento => memento.getName());
    }

};
