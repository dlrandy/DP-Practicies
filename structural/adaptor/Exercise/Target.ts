export default class Target {
    /**
     * doRequest
     */
    public doRequest(str:string):string {
        console.log(`default dealing with the request: ${str}.`);
        
        return str;
    }
};
