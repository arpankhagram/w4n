import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TooltipsComponent } from './tooltips.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [TooltipsComponent],   
    imports :[TooltipModule], 
    exports : [TooltipsComponent],
})

export class TooltipsModule {

}