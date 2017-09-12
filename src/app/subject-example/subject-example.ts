import { Subject, Observable, Subscription, Subscriber } from "rxjs/Rx";

export class SubjectExample {
    private subject: Subject<string>;
    private subscription: Subscription;

    
    constructor(){
        this.subject = new Subject<string>();
        
    }


    getStringObservable(): Observable<string>{
        return this.subject.asObservable();
    }

    getSharedObservable(): Observable<string>{
        return this.subject.asObservable().share();
    }

    put(val:string){
        this.subject.next(val);
    }
}
