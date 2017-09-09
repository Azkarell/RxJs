import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ApplicationRef, OnDestroy } from '@angular/core';
import { Fileinformation } from "../fileinformation";
import { EventRouterService } from "../event-router.service";
import { Subscription } from "rxjs/Rx";
import { TabviewComponent } from '../tabview/tabview.component';

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
  constructor(private evR: EventRouterService, private appref : ApplicationRef) {
      this.subscription = this.evR.subscribe<Fileinformation[]>("FileInformationUpdate", (fis => 
            
          { 
            this.tabs.clear();
            this.fileinfos = fis;
          })
        );
      }

  ngOnInit() {
    this.fileinfos = [];
   
  }

}
