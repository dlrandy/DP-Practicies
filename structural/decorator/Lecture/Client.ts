import Component from './Component';
import ConcreteComponent from './ConcreteComponent'
import ConcreteDecoratorA from './ConcreteDecoratorA'
import ConcreteDecoratorB from './ConcreteDecoratorB'
function clientCode(component:Component) {
  console.log(`Result: ${component.operation()}`);
}

const simple = new ConcreteComponent();
clientCode(simple);


const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);

console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);