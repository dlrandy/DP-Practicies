import Command from './Command';
export default class SimpleCommand implements Command {
    private a:string;
    constructor(a:string) {
        this.a = a;
    }
    public execute(): void {
        console.log(`simpleCommand show field a is: ${this.a}`);
        
    }
 
    
};
