import { NgModule } from '@angular/core';
import { FormsModule}  from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }     from '@angular/common';
import { ChartsModule } from '../charts/charts.module';
import { DataTableModule } from 'angular-2-data-table';
import { Ng2DataTableComponent } from '../ng2-data-table/ng2-data-table.component';
import {DashboardComponent} from './dashboard.component';
import {DataTableModule1} from '../data-table/data-table.module';
import {RecentalarmComponent} from '../recentalarm/recentalarm.component';
// import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';

@NgModule({
    declarations: [DashboardComponent,RecentalarmComponent],
    imports :[ChartsModule,CommonModule, DataTableModule,DataTableModule1],
    exports : [DashboardComponent,RecentalarmComponent],
})

export class DashboardModule {

}
