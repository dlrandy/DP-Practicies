export default interface Handler{
    setNext(handler:Handler):Handler;
    handle(a:string):string;
}