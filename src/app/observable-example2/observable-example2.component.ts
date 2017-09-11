import { Component, OnInit } from '@angular/core';
import { ObservableExample2 } from './observable-example2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'observable-example2',
  templateUrl: './observable-example2.component.html',
  styleUrls: ['./observable-example2.component.css']
})
export class ObservableExample2Component implements OnInit {

  n: number;
  output: string;
  s2: string;
  obsexample2 : ObservableExample2;
  sub: Subscription;
  constructor() { }

  ngOnInit() {
    this.obsexample2 = new ObservableExample2();
  }

  setString(s:string){
   
    this.s2 = s;
    var tmp = this.obsexample2.subscribe(s => this.output = s + this.s2);

    this.sub = tmp;
  }

}
