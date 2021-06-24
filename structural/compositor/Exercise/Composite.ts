import Component from "./Component";

type Components = Component[];
export default class Composite extends Component {
  private children: Components = [];
  public add(component:Component):void {
    this.children.push(component);
    component.setParent(this);
  }
  public remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index === -1) {
      return;
    }
    this.children.splice(index,1);
    component.setParent(null as unknown as Component);
  }
  public isComposite(): boolean {
    return true;
  }
  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }
    return `Branch(${results.join('+')})`;

  }
}
