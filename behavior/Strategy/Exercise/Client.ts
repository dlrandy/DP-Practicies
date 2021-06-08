import ConcreteStrategyA from "./ConcreteStrategyA ";
import ConcreteStrategyB from "./ConcreteStrategyB";
import Context from "./Context";

const context = new Context(new ConcreteStrategyA)
const data =['a','b','c'];
context.doSomething([...data])
context.setStrategy(new ConcreteStrategyB())
context.doSomething([...data])