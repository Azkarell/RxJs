import { Observable } from "rxjs/Observable";
import { ObservableExample1 } from "../observable-example-1/observable-example-1";
import { Subscription } from "rxjs";



export class ObservableExample2 {

    
    obs1: Observable<string>
    constructor(){
        this.obs1 = new ObservableExample1(1000).getObservable().map(n=> n.toString());
    }

    subscribe(callback:(s: string) => void): Subscription{
        return this.obs1.subscribe(callback);
    }
}