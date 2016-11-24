import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService }  from './api.service';
import { MenuServiceService } from './menu-service.service';
import { GetreportService }  from './getreport.service';
import { RestService }  from './services/rest.service';
import {HomeModule} from './home/home.module';

import { ChartsModule } from './charts/charts.module';
import  { SearchBoxModule } from './home/nav-bar/search-box/search-box.module';
import { PaginationModule,AlertModule, DatepickerModule,TypeaheadModule,DropdownModule,CollapseModule,TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { routing, appRoutingProviders }  from './app.routing';

import { Ng2TableModule } from 'ng2-table/ng2-table';
//import { DatePicker } from 'ng2-datepicker/ng2-datepicker';

import { NavigationComponent } from './navigation/navigation.component';
import { CalenderComponent } from './common/calender/calender.component';

import { AppComponent } from './app.component';
import { TopologyComponent } from './topology/topology.component';
import { SearchBoxComponent } from './home/nav-bar/search-box/search-box.component';
import { DataTableModule1 } from './data-table/data-table.module';
import { SettingsComponent } from './settings/settings.component';
import { SubSettingsComponent } from './settings/sub-settings/sub-settings.component';

import { Ng2DataTableComponent } from './ng2-data-table/ng2-data-table.component';
import {AllalarmsComponent} from './allalarms/allalarms.component';
import { DataTableModule } from 'angular-2-data-table';
import { GoogleMapModule } from './google-map/google-map.module';
import { TopoComponent } from './topo/topo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';
import { ReportComponent } from './report/report.component';
import { NewreportComponent } from './newreport/newreport.component';
import { ReactiveFormsModule } from '@angular/forms';




// Create config options (see ILocalStorageServiceConfigOptions) for deets:
let localStorageServiceConfig = {
    prefix: 'my-app',
    storageType: 'sessionStorage'
};

@NgModule({
  declarations: [
    AppComponent, TopologyComponent, NavigationComponent, CalenderComponent, SettingsComponent,
     SubSettingsComponent, TopoComponent, Ng2DataTableComponent,  NewreportComponent,AllalarmsComponent ,ReportComponent

  ],
  imports: [
    BrowserModule,
    CollapseModule,
    FormsModule,
    HttpModule,
    HomeModule,
    SearchBoxModule,
    ChartsModule,
    PaginationModule,
    DataTableModule,
    routing,
    TypeaheadModule,
    GoogleMapModule,
    Ng2TableModule,
  TabsModule,
    ReactiveFormsModule,
    DashboardModule,
    DataTableModule1

     ],
  providers: [appRoutingProviders,RestService,GetreportService,ApiService,MenuServiceService, LocalStorageService,
        {
            provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
