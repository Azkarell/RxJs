import { Component, AfterViewChecked } from '@angular/core';
import { EventRouterService } from "./event-router.service";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'RxJs';
  componentstring :string;
  classstring: string;

  private subscription: Subscription;

  constructor(private evR: EventRouterService){
    
  }

  setclass(s:string){
    console.log(s);
    this.classstring = s;
  }
  setcomponent(s:string){
    this.componentstring = s;
  }

}
