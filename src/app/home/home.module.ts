import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import { FormsComponent } from './forms/forms.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { SearchBoxComponent } from './nav-bar/search-box/search-box.component';
import { FormsModule}  from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule, DatepickerModule,TypeaheadModule,DropdownModule,TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { TypographyComponent } from './typography/typography.component';
import { MasterTabsComponent } from './master-tabs/master-tabs.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { GridStructureComponent } from './grid-structure/grid-structure.component';
import { Pagination2Module } from './pagination/pagination.module';
import { CalendarModule } from './calendar/calendar.module';


import { TooltipsModule } from './tooltips/tooltips.module';
import { LabelsComponent } from './labels/labels.component';
import { ButtonBadgesComponent } from './button-badges/button-badges.component';
import { AlertsComponent } from './alerts/alerts.component';
import { PanelsComponent } from './panels/panels.component';

import { TablesComponent } from './tables/tables.component';
import { ModelsComponent } from './models/models.component';


import { TabsInternalModule } from './tabs/tabs.module';


@NgModule({
    declarations: [HomeComponent, FormsComponent, TypographyComponent, MasterTabsComponent,
     BreadcrumbsComponent, GridStructureComponent, LabelsComponent, ButtonBadgesComponent, AlertsComponent, PanelsComponent, TablesComponent, ModelsComponent],   
    imports :[NavBarModule,TypeaheadModule, Pagination2Module , BrowserModule,TooltipsModule,CalendarModule,TabsModule,TabsInternalModule], 
    exports : [HomeComponent],
})

export class HomeModule {

}

