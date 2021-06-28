export default class Flyweight {
    private sharedState: any;
    constructor(sharedState:any) {
      this.sharedState = sharedState;
    }
    public operation(uniqueState:any):void {
      const s = JSON.stringify(this.sharedState);
      const u = JSON.stringify(uniqueState);
      console.log(`Flyweight: displaying sharedState ${s} and uniqueState ${u}.`);
    }
  };
  