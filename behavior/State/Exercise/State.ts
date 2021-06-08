import Context from "./Context";

export default abstract class State {
    // 作为State抽象类，首先要有context，便于将context过渡到下一个state；
    protected context!:Context;
    // 抽象的state类要有一个改变context的方法
    public setContext(context:Context){
         this.context= context;
    }
    // 声明两个抽象的状态过渡方法
    /**
     * abstract handle
     */
    public abstract handle1():void;
    public abstract handle2():void;
    
 };
 