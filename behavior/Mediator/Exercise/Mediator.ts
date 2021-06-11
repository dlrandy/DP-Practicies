import BaseComponent from "./BaseComponent";

export default interface Medaitor{
    notify(sender: BaseComponent, event: string):void;
}