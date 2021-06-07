import State from './State'
export default class Context {
  
    private state: State;
    constructor(state: State) {
        this.state = state;
        this.transitionTo(state);
    }

    transitionTo(state: State){
        this.state = state;
        this.state.setContext(this);
    }

    /**
     * request1
     */
    public request1() {
        this.state.handle1();
    }

    /**
     * request2
     */
    public request2() {
        this.state.handle2();
    }
};
