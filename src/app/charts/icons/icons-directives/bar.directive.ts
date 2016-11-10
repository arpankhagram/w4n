import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appbar]'  
})
export class BarDirective {

@Input('appbar') appbar: string;

   constructor(private el: ElementRef, private renderer: Renderer) { 
         this.renderer.setElementAttribute(this.el.nativeElement, 'class', 'fa fa-area-chart')
   }

}
