import { NgModule } from '@angular/core';

import { TabsComponent } from './tabs.component';
import { TabsModule,TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [ TabsComponent], 
     imports :[TabsModule,BrowserModule,TooltipModule],    
    exports : [ TabsComponent]
})

export class TabsInternalModule { 
 
}
