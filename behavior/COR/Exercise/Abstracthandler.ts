import Handler from "./Handler";

export default abstract class AbstractHandler  implements Handler{
  private nextHandler!:Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return this.nextHandler;
  }
  handle(a: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(a);
    }
    return '';
  }
}