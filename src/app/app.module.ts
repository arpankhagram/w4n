import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestService }          from './services/rest.service';
import {HomeModule} from './home/home.module';

import { ChartsModule } from './charts/charts.module';
import  { SearchBoxModule } from './home/nav-bar/search-box/search-box.module';
import { AlertModule, DatepickerModule,TypeaheadModule,DropdownModule,CollapseModule,TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { routing, appRoutingProviders }  from './app.routing';
import { DataTableModule } from 'angular-2-data-table';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import { NavigationComponent } from './navigation/navigation.component';
import { CalenderComponent } from './common/calender/calender.component';

import { AppComponent } from './app.component';
import { TopologyComponent } from './topology/topology.component';
import { SearchBoxComponent } from './home/nav-bar/search-box/search-box.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SettingsComponent } from './settings/settings.component';
import { SubSettingsComponent } from './settings/sub-settings/sub-settings.component';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2DataTableComponent } from './ng2-data-table/ng2-data-table.component';


import { GoogleMapModule } from './google-map/google-map.module';
import { TopoComponent } from './topo/topo.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDashboard2Component } from './user-dashboard2/user-dashboard2.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { UserDashboard2Module } from './user-dashboard2/user-dashboard2.module';

// Service
//import {ApiConfig} from "./api.service";
//import { SerTestComponent } from "./ser-test/ser-test.component"

@NgModule({
  declarations: [
    AppComponent, TopologyComponent, NavigationComponent, CalenderComponent, SettingsComponent,
     SubSettingsComponent, TopoComponent, Ng2DataTableComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    FormsModule,
    HttpModule,
    HomeModule,
    SearchBoxModule,
    ChartsModule,
    DataTableModule,
    routing,
    TypeaheadModule,
    GoogleMapModule,
    Ng2TableModule,
    PaginationModule,
    TabsModule,
    UserDashboardModule,
    UserDashboard2Module
     ],
  providers: [appRoutingProviders, RestService,UserDashboardComponent,UserDashboard2Component,
        { provide: APP_INITIALIZER,
          useFactory: (config: RestService) => () => config.getHeroes(),
          deps: [RestService],
          multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
