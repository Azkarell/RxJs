import { Component } from '@angular/core';
import { SimpleObservableExample } from "./simple-observable-example";
import { SubjectExample } from "./subject-example";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJs';
  soe : SimpleObservableExample;
  se : SubjectExample;
  number : number;
  string : string;
  constructor(){
    this.soe = new SimpleObservableExample();
    this.se = new SubjectExample();
    this.se.getNumbers().subscribe(n => this.number = n);
    this.se.getStrings().subscribe(n => this.string = n);
  }
  put(n:number){
    this.se.put(n);
  }
}
