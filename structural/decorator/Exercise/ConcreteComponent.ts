import Component from "./Component";

export default class ConcreteComponent implements Component {
  operation(): string {
   return `ConcreteComponent operation.`;
  }
  
};
