import Product from "./Product";

export default abstract class Creator {
  public abstract factoryMethod():Product;
  public someOperation() {
    const product= this.factoryMethod();
    return product.operation();
  }
};
