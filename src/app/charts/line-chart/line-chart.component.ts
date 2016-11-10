import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { RestService }  from '../../services/rest.service';
import {UserDashboardComponent} from '../../user-dashboard/user-dashboard.component';
declare var $: any;

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements AfterViewInit {

@ViewChild('chart') public chartEl: ElementRef;

  private _chart: any;

  constructor(private restService: RestService,private userDashboardComponent:UserDashboardComponent){}
  templateData : any[] = this.restService.DefaultTemplate;

  getData(lineGraphReports : any){
    let dimensionVal = "dimension";
    let metricVal = "metric";
    let opt: any = {
        title: {
            text: 'Line Chart',
            x: -20
        },
        chart:{
          type: 'line'
        },
        xAxis: {
            categories: lineGraphReports[lineGraphReports[dimensionVal]]
        },
        series: [{
            name: 'India',
            data: lineGraphReports[lineGraphReports[metricVal]]
        }]
    };

return opt;



  }

  public ngAfterViewInit() {
    // let opts: any = {
    //     title: {
    //         text: 'Bar Chart',
    //         x: -20
    //     },
    //     chart:{
    //       type: 'bar'
    //     },
    //     xAxis: {
    //         categories: this.templateData[0].dashboards[0].reports[0].graphreports[0].ip
    //     },
    //     series: [{
    //         name: 'Tokyo',
    //         data: this.templateData[0].dashboards[0].reports[0].graphreports[0].FreeMemoryPct
    //     }]
    // };
    //
    // let opt: any = {
    //     title: {
    //         text: 'Bar Chart',
    //         x: -20
    //     },
    //     chart:{
    //       type: 'bar'
    //     },
    //     xAxis: {
    //         categories: this.templateData[0].dashboards[0].reports[0].graphreports[0].ip
    //     },
    //     series: [{
    //         name: 'China',
    //         data: this.templateData[0].dashboards[0].reports[0].graphreports[0].FreeMemoryPct
    //     }]
    // };


    console.log("configJson");
    console.log(this.restService.DefaultTemplate);

    //
    // if (this.chartEl && this.chartEl.nativeElement) {
    //     opts.chart = {
    //         type: 'bar',``
    //         renderTo: this.chartEl.nativeElement
    //     };

   this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.userDashboardComponent.lineGraphReports[0]));
    //}

    // To append the charts
    for (var j = 1; j < this.userDashboardComponent.lineGraphReports.length; j++) {

      $("#linesbc").parents('.row').append("<div class='col-md-6'><div class='widget'><div id='ch1'></div></div></div>");
      $('#ch1').highcharts(this.getData(this.userDashboardComponent.lineGraphReports[j]));
}
}
}
