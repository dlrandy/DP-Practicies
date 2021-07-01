import Builder from "./Builder";

export default class Director {
    private builder!:Builder;

    /**
     * setBuilder
     */
    public setBuilder(builder:Builder):void {
        this.builder = builder;
    }

    /**
     * buildMinimalViableProduct
     */
    public buildMinimalViableProduct():void {
        this.builder.producePartA();
    }
    /**
     * buildFullFeaturedProduct
     */
    public buildFullFeaturedProduct():void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
};
