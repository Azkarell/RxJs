import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { TabviewComponent } from './tabview/tabview.component';
import { TabComponent } from './tab/tab.component';
import { ViewerComponent } from './viewer/viewer.component';
import { EventRouterService } from "./event-router.service";
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { FileInformationService } from './file-information.service';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    SubjectExampleComponent,
    SimpleObservableComponent,
    TabviewComponent,
    TabComponent,
    ViewerComponent,
    HighlightDirective,
    
  ],

  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([ 
      {
        path:'ObservableExample',
        component: SimpleObservableComponent
      },
      {
        path: 'SubjectExample',
        component: SubjectExampleComponent
      }
    ])
    
  ],
  providers: [EventRouterService, FileInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
