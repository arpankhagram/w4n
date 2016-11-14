import { Component, Directive,AfterViewInit,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestService } from './services/rest.service';
import {UserDashboardComponent} from '../app/user-dashboard/user-dashboard.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{

 getTemplateURL : string = "http://services.groupkt.com/country/get/all";
 templateData : any;
 errorMessage: string;


 public isCollapsed:boolean = true;
 constructor(private restService: RestService,private userDashboardComponent:UserDashboardComponent) {}

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }


public ngOnInit(){

}

}
