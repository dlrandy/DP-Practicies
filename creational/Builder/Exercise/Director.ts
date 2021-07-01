import Builder from "./Builder";

export default class Director {
    private builder!:Builder;
    setBuilder(builder:Builder) {
        this.builder = builder;
    }
    
    public buildMinimalViableProduct() {
        this.builder.producePartA();
    }
    
    public buildFullFeaturedProduct() {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
};
