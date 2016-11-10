import { Component, Directive,AfterViewInit,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

 getTemplateURL : string = "http://services.groupkt.com/country/get/all";
 templateData : any = {
	"username": "test12",
	"dashboards": [{
		"dashboard-id": "1",
		"dashboardname": "Dashbaoard-1",
		"reports": [{
			"graphreports": [{
				"name": "Total Traffic Bar",
				"id": "1",
				"type": "TOPN",
				"graphtype": "bar",
				"position": "left",
				"order": "1",
				"filterexpression": "",
				"interval": "1 hour",
				"granularity": "minute",
				"dimension": "ip",
				"metric": "FreeMemoryPct",
				"aggregation": "Average",
				"ip": ["10.87.25.241", "172.30.97.242", "10.64.144.3", "10.123.96.12", "10.86.205.241"],
				"FreeMemoryPct": [5508.4469135802465, 5495.276485788114, 5466.730158730159, 5444.56038647343, 5436.191214470285]
			}, {
				"name": "Total Traffic Line",
				"id": "2",
				"type": "TOPN",
				"graphtype": "line",
				"position": "right",
				"order": "1",
				"filterexpression": "",
				"interval": "1 hour",
				"granularity": "minute",
				"dimension": "ip",
				"metric": "IN_BYTES",
				"aggregation": "SUM",
				"ip": ["10.87.25.241", "172.30.97.242", "10.64.144.3", "10.123.96.12", "10.86.205.241"],
				"IN_BYTES": [55080, 54950, 54660, 54440, 54360]
			}, {
				"name": "Device Availability",
				"id": "3",
				"type": "Graph",
				"graphtype": "gauge",
				"position": "right",
				"order": "1",
				"filterexpression": "'Device'=='5678'",
				"interval": "1 hour",
				"granularity": "",
				"dimension": "",
				"metric": "Availability",
				"aggregation": "Average",
				"Availability": [99.99]
			}],
			"tableReports": [{
				"name": "Interface Error Report",
				"id": "1",
				"type": "TABLE",
				"position": "right",
				"filterexpression": "'device'=='6578'",
				"attributes": [{
					"name": "Id",
					"nodeproperty": "id",
					"defaultvalue": "asdas",
					"sort": "asc",
					"order": 1,
					"values": [1, 2, 3, 4, 5]
				}, {
					"name": "model",
					"nodeproperty": "model",
					"defaultvalue": "7",
					"sort": "asc",
					"order": 2,
					"values": ["abc", "def", "xyz", "pqr", "ijk"]
				}, {
					"name": "vendor",
					"nodeproperty": "vendor",
					"defaultvalue": "VENDOR6",
					"sort": "desc",
					"order": 3,
					"values": ["123", "456", "789", "910", "112"]
				}]
			}]
		}]
	}]
};
 errorMessage: string;


 public isCollapsed:boolean = true;
 constructor(private restService: RestService) {}

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }


public ngOnInit()
  {
      //  let getTemplate: () => void
      //  {
      //     this.restService.GET(this.getTemplateURL)
      //     .subscribe(data =>{
      //     console.log("DATA");
      //     console.log(data);
      //     console.log("this.templateData");
      //     console.log(this.templateData.dashboards[0].reports[0].graphreports[0].graphtype);
      //     if(this.templateData.dashboards[0].reports[0].graphreports[0].graphtype="bar"){
      //     let baropts: any = {
      //           title: {
      //               text: 'Column Chart'
      //           },
      //           subtitle: {
      //               text: 'Source: WorldClimate.com'
      //           },
      //           xAxis: {
      //               categories: this.templateData.dashboards[0].reports[0].graphreports[0].ip,
      //               crosshair: true
      //           },
      //           yAxis: {
      //               min: 0,
      //               title: {
      //                   text: 'Rainfall (mm)'
      //               }
      //           },
      //           tooltip: {
      //               headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      //               pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      //                   '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      //               footerFormat: '</table>',
      //               shared: true,
      //               useHTML: true
      //           },
      //           plotOptions: {
      //               column: {
      //                   pointPadding: 0.2,
      //                   borderWidth: 0
      //               }
      //           },
      //           series: [{
      //               name: 'Tokyo',
      //               data: this.templateData.dashboards[0].reports[0].graphreports[0].FreeMemoryPct
      //           }]
      //       };
      //       console.log("baropts");
      //       console.log(baropts);
       //
      //     }
      //     error => this.errorMessage= <any> error});
      //  }
    }

}
