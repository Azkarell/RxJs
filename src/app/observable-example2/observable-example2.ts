import { Observable } from "rxjs/Observable";
import { ObservableExample1 } from "../observable-example-1/observable-example-1";
import { Subscription } from "rxjs";



export class ObservableExample2 {

    
    obs1: Observable<string>
    constructor(){

    }

    setString(s:String){
        this.obs1 = <Observable<string>>Observable.of(s).map((st:string) => st.toLocaleUpperCase());
    }

    subscribe(callback:(s: string) => void): Subscription{
   
        return this.obs1.subscribe(callback);
    }
}