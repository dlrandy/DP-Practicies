export default interface MyIterator<T> {
    current():T;
    next():T;
    key():number;
    valid():boolean;
    rewind():void;
}