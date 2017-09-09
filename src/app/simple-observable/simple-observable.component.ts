import { Component, OnInit, OnDestroy } from '@angular/core';
import { SimpleObservableExample } from "./simple-observable-example";
import { ViewerComponent } from "../viewer/viewer.component";
import { Subscription } from "rxjs/Rx";
import { EventRouterService } from "../event-router.service";
import { OnSelected } from "../on-selected";
import { Fileinformation } from "../fileinformation";
import { Http, Response, Headers, ResponseContentType } from "@angular/http";
import { FileInformationService } from '../file-information.service';

@Component({
  selector: 'observable-example',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css']
})
export class SimpleObservableComponent  implements OnInit, OnDestroy, OnSelected {
  OnSelected() {
    this.fileinfos.setFiles(this.filecontents);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  soe: SimpleObservableExample;
  private sub: Subscription;
  private filecontents: Fileinformation[];
  private httpsub;
  constructor(private evR: EventRouterService, private http: Http, private fileinfos: FileInformationService ) { 
  
  }

  private url = "assets/simple-observable/";
  private headers : Headers;
  private filenames = ["simple-observable.component.ts", "simple-observable-example.ts"];
  ngOnInit() {
  
    this.sub = this.evR.subscribe("ObservableExample",()=>this.OnSelected());
    this.soe = new SimpleObservableExample();
    this.filecontents = [];
    this.httpsub = this.filenames.forEach(element => {
      this.http.get(this.url + element, {responseType: ResponseContentType.Text})
      .map(r => new Fileinformation(element,r.text()) )
      .subscribe(t => {this.filecontents.push(t); this.evR.put({filter:"ObservableExampleUpdate"})});
    });
   
  }

}
