import WordsCollection from "./WordsCollection";

const wordsCollection = new WordsCollection();

const iterator = wordsCollection.getIterator();
const iteratorReverse = wordsCollection.getReverseIterator();

wordsCollection.addItem('First');
wordsCollection.addItem('Second');
wordsCollection.addItem('Third');

iterator.rewind();
while (iterator.valid()) {
    console.log(iterator.next());
}
iteratorReverse.rewind();
while (iteratorReverse.valid()) {
    console.log(iteratorReverse.next());
}