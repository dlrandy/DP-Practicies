import Aggregator from "./Aggregator";
import AlphabeticalOrderIterator from "./AlphabeticalOrderIterator";
import Iterator from "./Iterator";

export default class WordsCollection implements Aggregator {
  private items: string[] = [];

  public addItem(item: string): void {
    this.items.push(item);
  }
  public getCount(): number {
    return this.items.length;
  }
  public getItems(): string[] {
    return this.items;
  }

  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }
  public getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}
