import Component from "./Component";

export default interface Visitor {
    doForCompA(component:Component):void;
    doForCompB(component:Component):void;
}