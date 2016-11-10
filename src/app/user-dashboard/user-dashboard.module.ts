import { NgModule } from '@angular/core';
import { FormsModule}  from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }     from '@angular/common';
import { ChartsModule } from '../charts/charts.module';
import { DataTableModule } from 'angular-2-data-table';
import { Ng2DataTableComponent } from '../ng2-data-table/ng2-data-table.component';
import {UserDashboardComponent} from './user-dashboard.component';
import {DataTableComponent} from '../data-table/data-table.component'
// import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';

@NgModule({
    declarations: [UserDashboardComponent, DataTableComponent],
    imports :[ChartsModule,CommonModule, DataTableModule],
    exports : [UserDashboardComponent, DataTableComponent],
})

export class UserDashboardModule {

}
