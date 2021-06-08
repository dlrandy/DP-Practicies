import Observer from "./Observer";
import Subject from "./Subject";

export default class ConcreteSubject implements Subject {
  state!: number;
  private observers: Observer[] = [];
  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Subject: observer has been attached already");
    }
    console.log("Subject: attached an observer");
    this.observers.push(observer);
  }
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }
    this.observers.splice(observerIndex, 1);
    console.log("Subject: detached an observer.");
  }
  notify(): void {
    console.log("Subject:Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  /**
   * someBusinessLogic
   */
  public someBusinessLogic() {
    console.log("\nSubject: I'm doing something important.");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}
