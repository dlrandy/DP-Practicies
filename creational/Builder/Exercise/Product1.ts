export default class Product1 {
  private parts: string[] = [];
  public addPart(part:string) {
    this.parts.push(part);
  }
  public listParts():void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
};
