import Adaptee from "./Adaptee";
import Adaptor from "./Adapter";
import Target from "./Target"

const str = 'how could i not enjoy this fun?'

const target = new Target();
console.log(target.doRequest(str));

const adaptee = new Adaptee();
console.log(adaptee.doSpecificRequest(str));

const adaptor = new Adaptor(adaptee);
console.log(adaptor.doRequest(str))


