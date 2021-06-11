import MyIterator from "./Iterator";
import WordsCollection from "./WordsCollection";

export default class AlphabeticalOrderIterator  implements MyIterator<string> {
  private collection:WordsCollection;
  private position: number = 0;
  private reverse: boolean = false;

  constructor(collection:WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  current(): string {
    return this.collection.getItems()[this.position];
  }
  next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }
  key(): number {
    return this.position;
  }
  valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }
    return this.position < this.collection.getCount();
  }
  rewind(): void {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }
  
};
