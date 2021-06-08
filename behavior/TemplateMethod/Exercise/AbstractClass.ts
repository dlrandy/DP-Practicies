export default abstract class AbstractClass {
  /**
   * templateMethod
   */
  public templateMethod() {
    this.baseOperation1()
    this.baseOperation2()
    this.ciriticalMethod1()
    this.hook1();
    this.importantOperation();
    this.hook2();
    this.ciriticalMethod2()
  }

  /**
   * baseOperation1
   */
  private baseOperation1() {
    console.log('private baseOperation1');
    
  }
  protected baseOperation2() {
    console.log('protected baseOperation2');
  }

  private importantOperation() {
    console.log('important operation');
  }
  /**
   * abstract ciriticalMethod1
   */
  protected abstract ciriticalMethod1():void;
  protected abstract ciriticalMethod2():void;

  /**
   * hook1
   */
  public hook1() {
    console.log('hook1 before important operation');
  }
  public hook2() {
    console.log('hook2 after important operation');
  }
  
}
