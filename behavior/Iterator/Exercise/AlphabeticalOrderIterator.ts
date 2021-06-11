import MyIterator from "./Iterator";

export default class AlphabeticalOrderIterator implements MyIterator<string> {
  private items: string[] = [];
  private reverse: boolean = false;
  private position: number = 0;
  constructor(items:string[], reverse:boolean = false) {
    this.items = items;
    this.reverse = reverse;
    if (this.reverse) {
      this.position = this.items.length === 0 ? 0 : this.items.length - 1;
    }
  }
  key(): number {
    return this.position;
  }
  current(): string {
    return this.items[this.position];
  }
  next(): string {
    const item = this.items[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }
  valid(): boolean {
    return this.reverse ? this.position >= 0 : this.position < this.items.length;
  }
  rewind(): void {
    this.position = this.reverse ? this.items.length - 1 : 0;
  }
  
};
