import { Observable } from "rxjs/Observable";




export class ObservableExample1{

    //Lifert die Ereignisse
    private obs: Observable<number>;
    constructor(interval: number){
        //erstellt ein neues Observable das alle @param interval ms eine neue zahl liefert
        this.obs = Observable.timer(0,interval);
    }

    subcribe(callback: (t:number) => void){
        //erst der aufruf von subscribe beginnt das Observable! davor werden keine zahlen generiert
        return this.obs.subscribe(callback);
    }

    getObservable(){
        return this.obs;
    }
}