import Command from "./Command";

export default class Invoker {
 private onStart!:Command;
 private onFinish!:Command;


 setOnStart(onStart:Command){
  this.onStart = onStart;
 }

 setOnFinish(onFinish:Command){
   this.onFinish = onFinish;
 }

 doSomethingImportant(){
   console.log('invoker: i will do something, anything want run before?');
   if (this.isCommand(this.onStart)) {
     this.onStart.execute();
   }

   console.log('invoker:i am doing something important.');
   
   console.log('invoker: i have done something, anything want run after?');
   if (this.isCommand(this.onFinish)) {
     this.onFinish.execute();
   }


   
 }

 isCommand(object:any): object is Command{
  return object && typeof object.execute === 'function';
 }
};
