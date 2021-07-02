import ComponentWithBackReference from "./ComponentWithBackReference";

export default class Prototype {
 public primitive:any;
 public component!:object;
 public circularReference!:ComponentWithBackReference;

 /**
  * clone
  */
 public clone():this {
   const clone = Object.create(this);
   clone.component = Object.create(this.component);
   clone.circularReference = {
     ...this.circularReference,
     prototype: clone
   };
   return clone;
 }
};
