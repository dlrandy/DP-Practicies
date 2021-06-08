import Observer from "./Observer";

export default interface Subuject{
  // state:any; 这里放在实现类里更好一些
  attach(observer:Observer):void;
  detach(observer:Observer):void;
  notify():void;
}