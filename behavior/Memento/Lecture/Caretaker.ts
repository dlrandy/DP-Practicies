import Memento from "./Memento";
import Originator from "./Originator";

export default class Caretaker {
    private mementos:Memento[] = [];
    private originator: Originator;
    constructor(originator:Originator) {
        this.originator = originator;
    }
    /**
     * backup
     */
    public backup():void {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    }

    /**
     * undo
     */
    public undo():void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop() as Memento;
        console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
        this.originator.restore(memento);
    }

    /**
     * showHistory
     */
    public showHistory():void {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        } 
    }
};
