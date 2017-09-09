import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription, Subject } from "rxjs/Rx";
@Injectable()
export class EventRouterService {

  private subject : Subject<Event<any>>;
  private sub;
  constructor() {
      this.subject = new Subject();
      this.sub = this.subject.asObservable().subscribe(ev => console.log(ev.filter + " " + ev.value));
   }



   put<T>(ev:Event<T>){
     console.log("putting: " + ev.filter + " v: " + ev.value );
     this.subject.next(ev);
   }

   subscribe<T>(filter: string | number, callback: (t?:T) => void):Subscription{
     return this.subject.asObservable()
     .filter(v => v.filter === filter)
     .map(ev => <T> ev.value)
     .subscribe(callback);
   }

}

export class Event<T> {
  constructor(public filter: string | number, public value?:T){};
}

