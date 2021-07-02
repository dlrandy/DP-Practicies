export default class Singleton {
    private static  singleton:Singleton;
    private constructor() {
        
    }
    /**
     * static 
     */
    public static getInstance () {
        if (!this.singleton) {
            this.singleton = new Singleton();
        }
        return this.singleton;
    }

    /**
     * doSomebusiness
     */
    public doSomebusiness() {
        console.log('singleton class do some business.');
        
    }
};
