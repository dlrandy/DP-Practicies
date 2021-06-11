import BaseComponent from "./BaseComponent";

export default class Component1 extends BaseComponent {
  
    public doA() {
        console.log('Component1: do A.');
        this.mediator.notify(this, 'A')
    }
    public doB() {
        console.log('Component1: do B.');
        // this.mediator.notify(this, 'B')
    }
};
