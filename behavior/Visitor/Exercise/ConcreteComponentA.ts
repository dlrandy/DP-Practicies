import Component from "./Component";
import Visitor from "./Visitor";

 export default class ConcreteComponentA extends Component {
     accept(visitor: Visitor) {
         visitor.doForCompA(this);
     }

     specialMethodForVisitor(){
         return 'AAAAAAAAAAAAAAAAA'
     }
     
 };
 