import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[testdire]'
})
export class TestdireDirective {

  constructor(el:ElementRef,renderer:Renderer) { 
    console.log(el,renderer);
    renderer.setElementStyle(el.nativeElement,'fontSize','18px');
  }

}
