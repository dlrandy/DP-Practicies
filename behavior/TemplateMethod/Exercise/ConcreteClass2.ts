import AbstractClass from "./AbstractClass";

export default class ConcreteClass2 extends AbstractClass {
  protected ciriticalMethod1(): void {
    console.log("ciriticalMethod1 in ConcreteClass2.");
  }
  protected ciriticalMethod2(): void {
    console.log("ciriticalMethod2 in ConcreteClass2.");
  }
 
 
}
