import Prototype from "./Prototype";

export default class ComponentWithBackReference {
 public prototype:Prototype;
 constructor(prototype:Prototype) {
     this.prototype = prototype;
 }
};
