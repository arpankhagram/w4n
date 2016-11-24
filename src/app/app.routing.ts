import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent }  from './home/home.component';
import {SearchOptionsComponent }    from './home/nav-bar/search-options/search-options.component';

import {SearchBoxComponent }    from './home/nav-bar/search-box/search-box.component';
import {AllalarmsComponent }    from './allalarms/allalarms.component';
import {ChartsComponent} from './charts/charts.component';
import {TopologyComponent} from './topology/topology.component';
import {TopoComponent} from './topo/topo.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {DataTableComponent} from './data-table/data-table.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ReportComponent } from './report/report.component';
import { NewreportComponent } from './newreport/newreport.component';
import {SubSettingsComponent} from './settings/sub-settings/sub-settings.component';
import {SettingsComponent} from './settings/settings.component';
import {Ng2DataTableComponent} from './ng2-data-table/ng2-data-table.component';



export  const  appRoutes: Routes = [
   { path: '',  redirectTo: 'dashboard1',  pathMatch: 'full' },
   { path: 'dashboard1' , component: DashboardComponent},
   { path: 'dashboard/:id', component: DashboardComponent },
   //{ path: 'dashboard/1/report/2' , component: ReportComponent},
   { path: 'addNewReport' , component: NewreportComponent},
   { path: 'alarm' , component: AllalarmsComponent},
  //  { path: 'home' , component: HomeComponent},
  { path: 'dashboard/:id/report/:ReportId' , component: ReportComponent}

];


export const appRoutingProviders: any[] = [
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
