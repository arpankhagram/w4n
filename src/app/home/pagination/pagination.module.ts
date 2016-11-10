
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PaginationComponent } from './pagination.component';
//import { PagerComponent } from 'ng2-bootstrap/components/pagination';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [PaginationComponent],   
    imports :[PaginationModule], 
    exports : [PaginationComponent],
})

export class Pagination2Module {

}