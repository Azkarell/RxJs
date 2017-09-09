import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TabComponent } from "../tab/tab.component";
import { EventRouterService } from "../event-router.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'tabs',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.css']
})
export class TabviewComponent implements OnInit{

  
  constructor(private evR: EventRouterService) { }
  tabs: TabComponent[] = [];
  private sub : Subscription;
  ngOnInit() {
    this.evR.subscribe("TabContentUpdate",(tab: TabComponent)=> {
      if(tab.active){
        tab.OnSelected();
      }
    });
  }

  addTab(tab:TabComponent){
    if(this.tabs.length === 0){
      tab.active = true;
      tab.OnSelected();
    }
    this.tabs.push(tab);
  }
  selectTab(tab:TabComponent){
    this.tabs.forEach(t=>t.active=false);
    tab.active=true;
    tab.OnSelected();
  }
  removeTab(tab:TabComponent){
    var ind = this.tabs.indexOf(tab);
    if(ind > -1){
      this.tabs.splice(ind,1);
    }
  }
  clear(){
    this.tabs = [];
  }
}
