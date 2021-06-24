import Composite from "./Composite";
import Component from './Component';
import Leaf from "./Leaf";


function clientCode(component:Component) {
  console.log(`Result： ${component.operation()}`);
}



const simple= new Leaf()
console.log("Client: I've got a simple component:");
clientCode(simple);


const tree= new Composite();
const branch1= new Composite();
branch1.add(new Leaf);
branch1.add(new Leaf);
const branch2= new Composite();
branch2.add(new Leaf);

tree.add(new Leaf);
tree.add(branch1);
tree.add(branch2);
console.log("Client: Now I've got a composite tree:");
clientCode(tree);

function clientCode2(component1:Component, component2:Component) {
  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`Result: ${component1.operation()}`);
  
}

clientCode2(tree, simple);
