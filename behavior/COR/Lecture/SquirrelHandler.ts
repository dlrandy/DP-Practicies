import AbstractHandler from "./Abstracthandler";

export default class SquirrelHandler extends AbstractHandler {
    /**
     * handle
     */
    public handle(request: string): string {
        if (request === 'nut') {
            return `Squirrel: i'll eat the ${request}`;
        }
        return super.handle(request);
    }
};
