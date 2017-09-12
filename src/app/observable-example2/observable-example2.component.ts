import { Component, OnInit } from '@angular/core';
import { ObservableExample2 } from './observable-example2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'observable-example2',
  templateUrl: './observable-example2.component.html',
  styleUrls: ['./observable-example2.component.css']
})
export class ObservableExample2Component implements OnInit {

  output: string;
  output2: string;
  obsexample2 : ObservableExample2;
  sub: Subscription;
  sub2: Subscription;
  constructor() { }

  ngOnInit() {
    this.obsexample2 = new ObservableExample2();
  }

  setString(s:string){
   
    this.obsexample2.setString(s);

    this.sub = this.obsexample2.subscribe(st => this.output = st);
    setTimeout(() => {
      this.sub2 = this.obsexample2.subscribe(st => this.output2 = st.toLocaleLowerCase());
    },4000);
    
    

  }

}
