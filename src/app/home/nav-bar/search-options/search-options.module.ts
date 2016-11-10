import { NgModule } from '@angular/core';
import { TypeaheadModule,DropdownModule} from 'ng2-bootstrap/ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { SearchOptionsComponent } from './search-options.component';

@NgModule({
    declarations: [],    
    exports : [SearchOptionsComponent],
    imports : [TypeaheadModule,DropdownModule]
})

export class SearchOptionsModule { 
 
}

