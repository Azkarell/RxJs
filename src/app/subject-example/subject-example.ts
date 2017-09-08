import { Subject, Observable, Subscription, Subscriber } from "rxjs/Rx";

export class SubjectExample {
    private subject: Subject<number>;
    private subscription: Subscription;

    
    constructor(){
        this.subject = new Subject();
        var obs = Observable.interval(1000).filter(n => n % 2 == 0);
        this.subscription = obs.subscribe((n) => this.subject.next(n));
        
    }

    getNumbers(): Observable<number>{
        return this.subject.asObservable();
    }
    getStrings(): Observable<string>{
        return this.subject.asObservable().map((n)=>Math.random().toString(36).substr(7));
    }

    put(val:number){
        console.log(val);
        this.subject.next(val);
    }
}
