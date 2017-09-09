import { Component, OnInit, Input, ContentChild, AfterContentInit, QueryList, Query, ContentChildren, OnDestroy } from '@angular/core';
import { TabviewComponent } from "../tabview/tabview.component";
import { OnSelected } from "../on-selected";
import { EventRouterService } from "../event-router.service";
import { Fileinformation } from "../fileinformation";
import { Subscription } from 'rxjs';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent implements OnInit,  OnSelected, OnDestroy {
  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  ngAfterContentInit(): void {
  }
  OnSelected() {
    if(this.type)
      this.evR.put(this.type);
    
  }

  @Input() type: string;
  @Input() tabTitle;

  private contents: Fileinformation[];
  private sub: Subscription;
  active:boolean;
  constructor(tabs: TabviewComponent, private evR: EventRouterService) {
      tabs.addTab(this);
      if(this.type){
        this.sub = this.evR.subscribe(this.type,() => this.evR.put("TabContentUpdate",this));
        
      }
   }

  ngOnInit() {
  }

  
}
