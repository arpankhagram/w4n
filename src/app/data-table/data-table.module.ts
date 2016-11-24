import { NgModule } from '@angular/core';
import { FormsModule}  from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DataTableComponent } from './data-table.component';

@NgModule({
    declarations: [DataTableComponent],
    imports :[PaginationModule,FormsModule, BrowserModule],
    exports : [DataTableComponent],
})

export class DataTableModule1 {

}
