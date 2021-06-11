import Aggregator from "./Aggregator";
import AlphabeticalOrderIterator from "./AlphabeticalOrderIterator";

export default class WordsCollection implements Aggregator {
  private words:string[] = [];

  addItem(word:string){
    this.words.push(word);
  }

  getIterator(): AlphabeticalOrderIterator {
   return new AlphabeticalOrderIterator(this.words);
  }
  
  getReverseIterator(): AlphabeticalOrderIterator {
   return new AlphabeticalOrderIterator(this.words, true);
  }
  
};
