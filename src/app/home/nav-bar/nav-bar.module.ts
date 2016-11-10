import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav-bar.component';
import { AlertModule, DatepickerModule,TypeaheadModule,DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { SearchOptionsComponent } from './search-options/search-options.component';

@NgModule({
    declarations: [ NavBarComponent, SearchOptionsComponent],    
    exports : [ NavBarComponent],
    imports : [ AlertModule, DatepickerModule,TypeaheadModule,DropdownModule,BrowserModule],
})

export class NavBarModule { 
 
}

