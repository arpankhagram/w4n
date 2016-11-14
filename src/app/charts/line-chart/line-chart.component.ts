import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild,Input,OnInit} from '@angular/core';
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
export class LineChartComponent implements OnInit {
@Input() lineCharts: any;
@ViewChild('chart') public chartEl: ElementRef;

  private _chart: any;

  constructor(private restService: RestService,private userDashboardComponent:UserDashboardComponent){}
  templateData : any[] = this.restService.DefaultTemplate;

  getData(lineGraphReport : any){
    let dimensionVal = "dimension";
    let metricVal = "metric";
    let opt: any = {
        title: {
            text: lineGraphReport.name,
            x: -20
        },
        chart:{
          type: 'line'
        },
        credits: {
		                enabled: false
		              },
        xAxis: {
            categories: lineGraphReport[lineGraphReport[dimensionVal]]
        },
        series: [{
            name: lineGraphReport[metricVal],
            data: lineGraphReport[lineGraphReport[metricVal]]
        }]
    };
return opt;
  }

  public ngOnInit() {

    console.log("configJson");
    console.log(this.restService.DefaultTemplate);
    console.log("this.lineCharts");
    console.log(this.lineCharts);
    // To append the charts
     this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.lineCharts));
    //  $('#ch').highcharts(opts);
    console.log("this._chart");
    console.log(this._chart);

}
}
