import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { SimpleObservableComponent } from './simple-observable/simple-observable.component';
import { TabviewComponent } from './tabview/tabview.component';
import { TabComponent } from './tab/tab.component';
import { EventRouterService } from "./event-router.service";
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { FileInformationService } from './file-information.service';
import { HighlightDirective } from './highlight.directive';
import { ObservableExample1Component } from './observable-example-1/observable-example-1.component';
import { SourceCodeViewerComponent } from './source-code-viewer/source-code-viewer.component';
import { ObservableExample2Component } from './observable-example2/observable-example2.component';
import { IntroComponent } from './intro/intro.component';
import { ObservabledefinitionComponent } from './observabledefinition/observabledefinition.component';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { MoreComponent } from './more/more.component';
@NgModule({
  declarations: [
    AppComponent,
    SubjectExampleComponent,
    SimpleObservableComponent,
    TabviewComponent,
    TabComponent,
    HighlightDirective,
    ObservableExample1Component,
    SourceCodeViewerComponent,
    ObservableExample2Component,
    IntroComponent,
    ObservabledefinitionComponent,
    ExampleViewerComponent,
    MoreComponent,
    
  ],

  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([ 
      {
        path:'intro',
        component: IntroComponent
      },
      {
        path:'observable',
        component: ObservabledefinitionComponent
      },
      {
        path:'example',
        component: ExampleViewerComponent
      },
      {
        path:'more',
        component: MoreComponent
      },
      {
        path:'**', 
        redirectTo: 'intro',
        pathMatch: 'full'
      }
    ])
    
  ],
  providers: [EventRouterService, FileInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
