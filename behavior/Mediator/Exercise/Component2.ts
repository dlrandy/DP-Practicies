import BaseComponent from "./BaseComponent";

export default class Component2 extends BaseComponent {
  
    public doC() {
        console.log('Component2: do C.');
        this.mediator.notify(this, 'C')
    }
    public doD() {
        console.log('Component2: do D.');
        // this.mediator.notify(this, 'D')
    }
};
