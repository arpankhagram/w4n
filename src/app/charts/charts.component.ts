import { Directive, Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { LocalDirective } from './local.directive';
import { RestService }          from '../services/rest.service';

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements AfterViewInit {

 @ViewChild('chart') public chartEl: ElementRef;

 chartdata: any[];
 result:any;
 ip: Array<string> = [];
 bytes: Array<number> = [];
 private _chart: any;
 baseUrl: string = 'http://172.25.182.159:8082/druid/v2/?pretty';

constructor(private restService: RestService){}


  public ngAfterViewInit() {


    let  postChart: () => void
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
            console.log("RAW DATA");
            console.log(data);
            let templateData : any[];
            templateData = data;
            this.chartdata=data;
            console.log("TemplateData");
            console.log(templateData);
            console.log("ChartData");
            console.log(this.chartdata);
            console.log("GraphType"+templateData[0].dashboards[0].reports[0].graphreports[0].graphtype);

            // if(templateData.dashboards[0].reports[0].graphreports[0].graphtype="bar"){
            let opts: any = {
                  title: {
                      text: 'Column Chart'
                  },
                  subtitle: {
                      text: 'Source: WorldClimate.com'
                  },
                  xAxis: {
                      categories: templateData[0].dashboards[0].reports[0].graphreports[0].ip,
                      crosshair: true
                  },
                  yAxis: {
                      min: 0,
                      title: {
                          text: 'Rainfall (mm)'
                      }
                  },
                  tooltip: {
                      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                      footerFormat: '</table>',
                      shared: true,
                      useHTML: true
                  },
                  plotOptions: {
                      column: {
                          pointPadding: 0.2,
                          borderWidth: 0
                      }
                  },
                  series: [{
                      name: 'Tokyo',
                      data:templateData[0].dashboards[0].reports[0].graphreports[0].FreeMemoryPct
                  }]
              };
            if (this.chartEl && this.chartEl.nativeElement) {
                opts.chart = {
                    type: 'column',
                    renderTo: this.chartEl.nativeElement
                };
                this._chart = new Highcharts.Chart(opts);
             }
})
      }
   }

}
