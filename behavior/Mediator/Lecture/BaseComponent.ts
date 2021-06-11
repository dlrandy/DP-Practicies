import Mediator from "./Mediator";

export default class BaseComponent {
  protected mediator: Mediator;
  constructor(
    mediator: Mediator = {
      notify() {
        throw new Error("please set up your medaitor in your component.");
      },
    }
  ) {
    this.mediator = mediator;
  }

  public setMedaitor(medaitor: Mediator) {
    this.mediator = medaitor;
  }
}
