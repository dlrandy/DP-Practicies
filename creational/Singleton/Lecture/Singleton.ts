export default class Singleton {
    private static instance:Singleton;

    private constructor(){}

    /**
     * getInstance
     */
    public static getInstance():Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    /**
     * someBusinessLogic
     */
    public someBusinessLogic() {
        console.log('Singleton works and does some businesslogic.');
    }
};
