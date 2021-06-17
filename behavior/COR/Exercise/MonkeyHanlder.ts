import AbstractHandler from "./Abstracthandler";

export default class MonkeyHandler extends AbstractHandler {
    /**
     * handle
     */
    public handle(a: string):string {
        if(a === 'banana'){
            return `Monkey: eat ${a}.`;
        }
       return  super.handle(a);
    }
};