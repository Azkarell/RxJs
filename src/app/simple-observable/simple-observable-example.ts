import { Observable, Subscription, Subject } from "rxjs";

export class SimpleObservableExample {

    sub : Subscription;
    tuple : Tuple;
    constructor(){
        var ob1 = Observable.interval(500);
        var strings = ob1.map((v:number) => Math.random().toString(36).substr(2,5));
        var tupls = strings.zip(ob1, (s:string, n:number) => new Tuple(s,n));
        this.sub = tupls.subscribe((t) => this.tuple = t);
    }
}

class Tuple{

    constructor(public s:string, public n: number){

    }
}