import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild,Input,OnInit } from '@angular/core';
import { RestService }  from '../../services/rest.service';
import {UserDashboardComponent} from '../../user-dashboard/user-dashboard.component';
declare var $: any;

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() barCharts: any;
  @ViewChild('chart') public chartEl: ElementRef;


  _chart: any;
  test: Array<any> = [];
  constructor(private restService: RestService,private userDashboardComponent:UserDashboardComponent){}
  templateData : any[] = this.restService.DefaultTemplate;

  getData(barGraphReport : any){
    let dimensionVal = "dimension";
    let metricVal = "metric";
    let opt: any = {
        title: {
            text: barGraphReport.name,
            x: -20
        },
        chart:{
          type: 'bar'
        },
        credits: {
		                enabled: false
		              },
        xAxis: {
            categories: barGraphReport[barGraphReport[dimensionVal]]
        },
        series: [{
            name: barGraphReport[metricVal],
            data: barGraphReport[barGraphReport[metricVal]]
        }]
    };

return opt;

  }

  public ngOnInit() {

    console.log("configJson");
    console.log(this.restService.DefaultTemplate);
    console.log("this.barCharts");
    console.log(this.barCharts);
    // To append the charts
     this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.barCharts));
    //  $('#ch').highcharts(opts);
    console.log("this._chart");
    console.log(this._chart);
}

}
