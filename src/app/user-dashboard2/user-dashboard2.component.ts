import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Hero } from '../services/hero';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard2.component.html',
  styleUrls: ['./user-dashboard2.component.css'],
  providers :[RestService]
})

export class UserDashboard2Component implements OnInit {
  heroes: Hero[];
  response :any;
  baseUrl: string = 'http://172.25.182.159:8082/druid/v2/?pretty';


  constructor(private restService: RestService){}

  jwt : Array<any> = [];
  graphReports : any[] = this.restService.DefaultTemplate[0].dashboards[1].reports[0].graphreports;


  barGraphReports = this.graphReports.filter(element => {
                 return element.graphtype == "bar";
              });
  pieGraphReports = this.graphReports.filter(element => {
                return element.graphtype == "pie";
            });
  lineGraphReports = this.graphReports.filter(element => {
                return element.graphtype == "line";
            });
  guageGraphReports = this.graphReports.filter(element => {
                return element.graphtype == "gauge";
            });


  ngOnInit() {
    console.log("this.graphreports");
    console.log(this.graphReports);
    console.log("this.bargraphReports");
    console.log(this.barGraphReports);
    console.log("this.pieGraphReports");
    console.log(this.pieGraphReports);
    console.log("this.lineGraphReports");
    console.log(this.lineGraphReports);
    console.log("this.guageGraphReports");
    console.log(this.guageGraphReports);
  }

}
