import AbstractHandler from "./Abstracthandler";

export default class MonkeyHandler extends AbstractHandler {
    /**
     * handle
     */
    public handle(request: string):string {
        if (request === 'banana') {
            return `Monkey: I'll eat the ${request}`;
        }
        return super.handle(request);
    }
};
