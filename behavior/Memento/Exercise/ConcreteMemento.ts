import Memento from "./Memento";

export default class ConcreteMemento implements Memento {
   private state: string;
   private date: string;
   constructor(state: string) {
       this.state = state;
       this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
   }
    getState(): string {
        return this.state;
    }
    getName(): string {
       return `memento: ${this.date} / ${this.state}`;
    }
    getDate(): string {
       return this.date;
    }
    
};
