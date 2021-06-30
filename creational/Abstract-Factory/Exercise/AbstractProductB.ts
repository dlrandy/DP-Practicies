import AbstractProductA from "./AbstractProductA";

export default interface AbstractProductB {
  usefulFunctionB():string;
  anotherUsefulFunctionB(collabarator:AbstractProductA):string;
};
