import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import * as hljs from "highlightjs"

@Directive({
  selector: 'code[highlight]'
})

export class HighlightDirective implements AfterViewInit{
  ngAfterViewInit(): void {
    hljs.highlightBlock(this.refElem.nativeElement);
    
  }

  constructor(private refElem: ElementRef, rend: Renderer2) {
    if(hljs === undefined) console.log("undefined!");
    hljs.initHighlightingOnLoad();
   }
   
}
