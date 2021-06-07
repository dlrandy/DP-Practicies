import Context from "./Context";

export default abstract class State {
    protected context!: Context;

    /**
     * setContext
     */
    public setContext(context: Context) {
        this.context = context;
    }

    /**
     * abstract handle1
     */
    public abstract handle1():void;

    /**
     * abstract handle2
     */
    public abstract handle2():void;
};
