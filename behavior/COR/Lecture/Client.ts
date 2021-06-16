import DogHandler from "./DogHandler";
import Handler from "./Handler";
import MonkeyHandler from "./MonkeyHanlder";
import SquirrelHandler from "./SquirrelHandler";

function clientCode(handler:Handler) {
    const foods = ['nut', 'banana', 'cup of coffee'];
    for (const food of foods) {
        console.log(`Client: who want a ${food}`);
        const result = handler.handle(food);
        if (result) {
            console.log(result);
            
        } else {
            console.log(`${food} was left untouched.`);
            
        }
    }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();
monkey.setNext(squirrel).setNext(dog);

console.log('Chain: Monkey > Squirrel > Dog \n');
clientCode(monkey);
console.log('\n');

console.log('SubChain: Squirrel > Dog \n');
clientCode(squirrel);


