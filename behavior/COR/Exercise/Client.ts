import DogHandler from "./DogHandler";
import Handler from "./Handler";
import MonkeyHandler from "./MonkeyHanlder";
import SquirrelHandler from "./SquirrelHandler";

function clientCode(handler:Handler) {
    const foods = ['meatBall', 'nut', 'banana', 'cup of coffee'];
    for (const food of foods) {
        console.log(`who want to eat a ${food}? \n`);
      const res = handler.handle(food);
        if (res) {
            console.log(res);
            
        } else {
            console.log(`a ${food} is left untouched.`);
                
        }
        
    }
}

const monkeyHandler = new MonkeyHandler();
const squirrelHandler = new SquirrelHandler();
const dogHandler = new DogHandler();

monkeyHandler.setNext(squirrelHandler).setNext(dogHandler);

console.log('Monkey > Squirrel > Dog');
clientCode(monkeyHandler)
console.log(' Squirrel > Dog');
clientCode(squirrelHandler);

