import WordsCollection from "./WordsCollection";

 const collection = new WordsCollection();
 collection.addItem('First')
 collection.addItem('Second')
 collection.addItem('Third')

 const iterator = collection.getIterator();
 console.log('straight traversal');
 while (iterator.valid()) {
     console.log(iterator.next());
 }
 console.log('reverse traversal');
 const reverseIterator =collection.getReverseIterator();
 while (reverseIterator.valid()) {
     console.log(reverseIterator.next());
 }
 


