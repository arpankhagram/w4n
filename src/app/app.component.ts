import { Component, Directive,AfterViewInit,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestService } from './services/rest.service';
import {UserDashboardComponent} from '../app/user-dashboard/user-dashboard.component';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PeopleService]
})

export class AppComponent implements OnInit{

 getTemplateURL : string = "http://services.groupkt.com/country/get/all";
 templateData : any;
 errorMessage: string;


 public isCollapsed:boolean = true;
 constructor(private restService: RestService,private userDashboardComponent:UserDashboardComponent) {}


 getHeroes(): void {
    this.restService.getHeroes().then(heroes => this.templateData = heroes);
 }


  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }


public ngOnInit(){
   this.userDashboardComponent.postChart();
  this.getHeroes();
}

}
