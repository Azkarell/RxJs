import { Component, OnInit, Output, EventEmitter, OnChanges, AfterViewChecked, OnDestroy,
   ApplicationRef } from '@angular/core';
import { SubjectExample } from "./subject-example";
import { ViewerComponent } from "../viewer/viewer.component";
import { OnSelected } from "../on-selected";
import { EventRouterService } from "../event-router.service";
import { Subscription } from "rxjs/Rx";
import { Fileinformation } from "../fileinformation";
import { Http, ResponseContentType } from '@angular/http';

@Component({
  selector: 'subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.css']
})
export class SubjectExampleComponent implements OnInit, OnSelected, OnDestroy  {
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  OnSelected() {
    this.evR.put("FileInformationUpdate",this.filecontents);
  }



  private number: number;
  private string: string;
  private se: SubjectExample;
  private filecontents: Fileinformation[];

  private sub;
  constructor(private evR: EventRouterService, private http: Http, private appref: ApplicationRef) { 
    this.se = new SubjectExample();
    this.sub = evR.subscribe("SubjectExample",()=>this.OnSelected());
    this.se.getNumbers().subscribe(n => this.number = n);
    this.se.getStrings().subscribe(n => this.string = n);

  }
  private url = "assets/subject-example/";
  private headers : Headers;
  private filenames = ["subject-example.component.ts", "subject-example.ts"];
  ngOnInit() {
    this.filecontents = [];
    this.filenames.forEach(element => {
      this.http.get(this.url + element, {responseType: ResponseContentType.Text})
      .map(r => new Fileinformation(element,r.text()) )
      .subscribe(t => { this.filecontents.push(t); this.evR.put("SubjectExample")});
     
    });
  }
   

  put(n:number){
    this.se.put(n);
  }

  
}
