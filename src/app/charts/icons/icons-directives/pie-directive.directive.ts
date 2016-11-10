import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[app-pie]'  
})

export class PieDirective {
@Input('app-pie') appbar: string;
  constructor(private el: ElementRef, private renderer: Renderer) {
    this.renderer.setElementAttribute(this.el.nativeElement, 'class', 'fa fa-pie-chart')
   }

}
