import { Observable } from "rxjs/Observable";

export class SharedObservable {

    private obs1: Observable<number>;
    private obs2: Observable<number>;
    constructor(){
        this.obs1 = Observable.timer(0,500).filter((n:number) => n%2 == 0);
        this.obs2 = this.obs1.shareReplay();
    }

    subscribeShared(callback: (n:number) => void){
        return this.obs2.subscribe(callback);
    }

    subscribe(callback: (n:number)=>void){
        return this.obs1.subscribe(callback);
    }
}