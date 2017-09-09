import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription, Subject } from "rxjs/Rx";
@Injectable()
export class EventRouterService {

  private subject : Subject<Event>;
  private sub;
  constructor() {
      this.subject = new Subject();
      this.sub = this.subject.asObservable().subscribe(ev => console.log(ev.filter + " " + ev.value));
   }



   put(filter: string, value?:any){
     console.log("putting: " +filter + " v: " +value );
     this.subject.next({filter:filter, value:value});
   }

   subscribe<T>(filter: string, callback: (value?:T) => void):Subscription{
    
     return this.subject.asObservable()
     .filter(v => v.filter === filter)
     .map(ev => <T> ev.value)
     .subscribe(callback);
   }

}

class Event {
  constructor(public filter: string, public value:any){};
}

