import ConcreteMemento from "./ConcreteMemento";
import Memento from "./Memento";
// 这里犯了依赖实体类的错误
export default class Originator {
    private state: string;
    constructor(state:string) {
        this.state = state;
    }
    save():Memento{
        return new ConcreteMemento(this.state)
    }
    
    restore(memento:Memento){
        this.state = memento.getState();
    }

    doSomeBusinessLogic(len:number = 10){
        console.log('do some business logic....');
        this.state = Math.random().toString(len);
    }
    // 这个方法只为了debug，可以在restore方法里即日志
    getState(){
        return this.state;
    }

};
