import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ApplicationRef, OnDestroy } from '@angular/core';
import { Fileinformation } from "../fileinformation";
import { EventRouterService } from "../event-router.service";
import { Subscription } from "rxjs/Rx";
import { TabviewComponent } from '../tabview/tabview.component';
import { FileInformationService } from '../file-information.service';

@Component({
  selector: 'viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @ViewChild(TabviewComponent) tabs: TabviewComponent;
  fileinfos : Fileinformation[] = [];

  private subscription: Subscription;
  constructor(private evR: EventRouterService, private appref : ApplicationRef, private fileinfoservice: FileInformationService) {
 
      
  }
  ngOnInit() {
    this.fileinfos = [];
    this.subscription = this.fileinfoservice.getFiles( t => this.fileinfos = t);
  }

}
