import { NgModule } from '@angular/core';
import { TypeaheadModule} from 'ng2-bootstrap/ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBoxComponent } from './search-box.component';

@NgModule({
    declarations: [SearchBoxComponent],    
    exports : [SearchBoxComponent],
    imports : [TypeaheadModule]
})

export class SearchBoxModule { 
 
}

