import MyIterator from "./Iterator";

export default interface Aggregator{
  getIterator():MyIterator<string>
}