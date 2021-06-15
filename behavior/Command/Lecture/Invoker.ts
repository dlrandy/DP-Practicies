import Command from "./Command";

export default class Invoker {
  private onStart!: Command;
  private onFinish!: Command;

  /**
   * setOnStart
   */
  public setOnStart(command: Command) {
    this.onStart = command;
  }
  /**
   * setOnFinish
   */
  public setOnFinish(command: Command) {
    this.onFinish = command;
  }

  /**
   * doSomethingImportant
   */
  public doSomethingImportant(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }
  private isCommand(object: any): object is Command {
    return object.execute !== undefined;
  }
}
