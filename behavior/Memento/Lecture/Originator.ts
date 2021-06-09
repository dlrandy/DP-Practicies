import ConcreteMemento from "./ConcreteMemento";
import Memento from "./Memento";

export default class Originator {
    private state: string;
    constructor(state: string) {
        this.state = state;
        console.log(`Originator : initial state is: ${state}`);
    }
    /**
     * doSomeThing
     */
    public doSomeThing():void {
        console.log('Originator: i\'m  doing something important.');
        this.state = this.generateRandomString(30);
        console.log(`Originator: and my state has changed to: ${this.state}`);
    }

    private generateRandomString(length:number = 10):string{
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array
            .from({ length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    /**
     * save
     */
    public save():Memento {
       return new ConcreteMemento(this.state) 
    }

    /**
     * restore
     */
    public restore(memento:Memento) {
        this.state = memento.getState();
        console.log(`Originator: My state has changed to: ${this.state}`);
    }


};
