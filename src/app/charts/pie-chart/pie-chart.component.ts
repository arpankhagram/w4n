import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { RestService }  from '../../services/rest.service';




const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements AfterViewInit  {

 @ViewChild('chart') public chartEl: ElementRef;
 @ViewChild('chart1') public chartE2: ElementRef;

  private _chart: any;

constructor(private restService: RestService){}


  public ngAfterViewInit() {
    let opts: any = {
        title: {
            text: 'Severity'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Bytes Consumption',
            colorByPoint: true,
            data: [{ 
              "name": "10.83.216.66",      
              "y": 50
                            
            },{
              "name": "10.83.197.242",        
              "y": 10
                            
            }, {        
               "name": "10.80.120.66",
              "y": 10
                           
            },{        
             "name": "172.23.7.153", 
              "y": 20    
            },{        
              "name": "172.23.7.154",
              "y": 10
                           
            }]
        }]
    };
    console.log("configJson");
    console.log(this.restService.DefaultTemplate);
    if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'pie',
            renderTo: this.chartEl.nativeElement
        };
        opts.chart = {
            type: 'pie',
            renderTo: this.chartE2.nativeElement
        };


        this._chart = new Highcharts.Chart(opts);

    }
}

}
