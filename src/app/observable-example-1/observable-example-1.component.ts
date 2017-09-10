import { Component, OnInit } from '@angular/core';
import { ObservableExample1 } from './observable-example-1';
import { Subscription } from 'rxjs';

@Component({
  selector: 'observable-example-1',
  templateUrl: './observable-example-1.component.html',
  styleUrls: ['./observable-example-1.component.css']
})
export class ObservableExample1Component implements OnInit {

  obsexample1: ObservableExample1;
  num: number;
  sub: Subscription;
  constructor() { 
    this.num =0 ;
  }


  ngOnInit() {
    this.obsexample1 = new ObservableExample1(1000);
  }
  setInterval(n:number){
    if(this.sub)
    this.sub.unsubscribe();

    this.obsexample1 = new ObservableExample1(n *1000);
    this.sub = this.obsexample1.subcribe((n)=>this.num = n);
  }
}
