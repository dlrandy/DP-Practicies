import Observer from "./Observer";
import Subject from "./Subject";

export default class ConcreteSubject implements Subject {
  state!:number;
  observers: Observer[] = [];
  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: observer has already in there.');
    }
    this.observers.push(observer);
    console.log('Subject: observer has been added.');
    
  }
  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if(index === -1){
      return console.log('the observer not in this Subject.');
    }
    this.observers.splice(index, 1);
    console.log('the observer has been removed.');
  }
  notify(): void {
    this.observers.forEach(observer => observer.update(this));
  }

  doSomeBusinessLogic():void{
    this.state = Math.random() * 10;
    this.notify();
  }
  
};
