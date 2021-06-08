import Visitor from "./Visitor";

 export default abstract class Component {
     abstract accept(visitor:Visitor):void;
 };
 