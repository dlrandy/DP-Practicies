import ConcreteStrategyA from "./ConcreteStrategyA ";
import ConcreteStrategyB from "./ConcreteStrategyB";
import Context from "./Context";
 
const context = new Context(new ConcreteStrategyA());


console.log('Client: Strategy is set to normal sorting.');
context.doThings(['a','b','c']);

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doThings(['a','b','c']);