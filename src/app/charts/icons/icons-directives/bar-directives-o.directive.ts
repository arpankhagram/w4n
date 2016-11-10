import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[app-bar-o]'
})
export class BarDirectivesO {
@Input('app-bar-o') appbar: string;
  constructor(private el: ElementRef, private renderer: Renderer) {
    this.renderer.setElementAttribute(this.el.nativeElement, 'class', 'fa fa-bar-chart')
   }

}