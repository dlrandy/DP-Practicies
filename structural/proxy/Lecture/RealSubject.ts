import Subject from "./Subject";

export default class RealSubject implements Subject {
    request(): void {
        console.log('RealSubject: handling request.');
    }
    
};
