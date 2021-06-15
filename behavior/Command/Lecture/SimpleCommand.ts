import Command from "./Command";

export default class SimpleCommand implements Command {
    private payload: string;
    constructor(payload: string) {
        this.payload = payload;
    }
    execute(): void {
        console.log(`simple command: the payload is ${this.payload}`);
    }
    
};
