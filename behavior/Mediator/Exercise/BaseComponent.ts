import Mediator from "./Mediator";

export default class BaseComponent {
  protected mediator:Mediator;
  constructor(mediator: Mediator = {
    notify(){
      throw new Error('子组件里实现notify方法。');
    }
  }) {
    this.mediator = mediator;
  }

  public setMediator(mediator:Mediator){
    this.mediator = mediator;
  }
};
