import AbstractClass from "./AbstractClass";
import ConcreteClass1 from "./ConcreteClass1";
import ConcreteClass2 from "./ConcreteClass2";

 function clientCode(abstractClass:AbstractClass) {
   abstractClass.templateMethod();
 }

 clientCode(new ConcreteClass1)
 console.log('==================');
 
 clientCode(new ConcreteClass2)