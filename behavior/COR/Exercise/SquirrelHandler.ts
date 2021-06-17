import AbstractHandler from "./Abstracthandler";

export default class SquirrelHandler extends AbstractHandler {
    /**
     * handle
     */
    public handle(a: string):string {
        if(a === 'nut'){
            return `Squirrel: eat ${a}.`;
        }
        return super.handle(a);
    }
};