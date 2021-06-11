export default interface MyIterator<T> {
    key():number;
    current():T;
    next():T;
    valid():boolean;
    rewind():void;
}