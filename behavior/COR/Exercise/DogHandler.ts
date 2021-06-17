import AbstractHandler from "./Abstracthandler";

export default class DogHandler extends AbstractHandler {
    /**
     * handle
     */
    public handle(a: string):string {
        if(a === 'meatBall'){
            return `Dog: eat ${a}.`;
        }
        return super.handle(a);
    }
};
