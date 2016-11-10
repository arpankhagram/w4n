import { CalendarComponent } from './calendar.component';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    declarations: [ CalendarComponent],   
    imports :[DatepickerModule,BrowserModule,TimepickerModule], 
    exports : [CalendarComponent],
})

export class CalendarModule {

}