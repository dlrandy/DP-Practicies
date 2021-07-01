import ConcreteBuilder1 from "./ConcreteBuilder1";
import Director from "./Director";

function clientCode(director:Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);
    console.log('standard basic product:');

    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    console.log('Custom product:');
    builder.producePartA()
    builder.producePartC()
    builder.getProduct().listParts()
    
    
}

const director = new Director();
clientCode(director);