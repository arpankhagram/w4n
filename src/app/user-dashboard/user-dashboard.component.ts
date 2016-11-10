import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
 baseUrl: string = 'http://172.25.182.159:8082/druid/v2/?pretty';

graphReports: Array<any> = [];
barGraphReports: Array<any> = [];
pieGraphReports: Array<any> = [];
lineGraphReports: Array<any> = [];
guageGraphReports: Array<any> = [];


  constructor(private restService: RestService){}

   postChart():any
  {

    let query= {
      "queryType": "groupBy",
      "dataSource": "telemetry",
      "granularity": "all",
      "dimension": [],
      "aggregations": [{ "type" : "count", "name" : "rows" }],
      "intervals" : ["2016-10-14/2016-10-19"]
    };


  this.restService.POST(query, this.baseUrl)
  .subscribe(data => {
  this.graphReports = data[0].dashboards[0].reports[0].graphreports;


  this.barGraphReports = this.graphReports.filter(element => {
                 return element.graphtype == "bar";
              });
  this.pieGraphReports = this.graphReports.filter(element => {
                return element.graphtype == "pie";
            });
  this.lineGraphReports = this.graphReports.filter(element => {
                return element.graphtype == "line";
            });
  this.guageGraphReports = this.graphReports.filter(element => {
                return element.graphtype == "gauge";
            });
})

}

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
