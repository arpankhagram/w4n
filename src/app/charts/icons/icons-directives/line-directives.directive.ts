import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[app-line]'
})

export class LineDirective {
@Input('app-line') appline: string;
   constructor(private el: ElementRef, private renderer: Renderer) {
    this.renderer.setElementAttribute(this.el.nativeElement, 'class', 'fa fa-line-chart')
   }

}