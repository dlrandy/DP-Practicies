export default class Adaptee {
    /**
     * doRequest
     */
    public doSpecificRequest(str:string):string {
        const line = str.split('').reverse().join('');
        console.log(`specific dealing with the request: ${line}.`);
        return line;
    }
};
