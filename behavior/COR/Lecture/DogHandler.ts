import AbstractHandler from "./Abstracthandler";

export default class DogHandler extends AbstractHandler {
    /**
     * handle
     */
    public handle(request: string): string {
        if (request === 'meatBall') {
            return `Dog: i'll eat the ${request}`;
        }
        return super.handle(request);
    }
};
