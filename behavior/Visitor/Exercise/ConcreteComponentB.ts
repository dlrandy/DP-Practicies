import Component from "./Component";
import Visitor from "./Visitor";

 export default class ConcreteComponentB extends Component {
     accept(visitor: Visitor) {
        visitor.doForCompB(this)
     }
     specialMethodForVisitor(){
        return 'BBBBBBBBBBBBB'
    }
     
 };
 