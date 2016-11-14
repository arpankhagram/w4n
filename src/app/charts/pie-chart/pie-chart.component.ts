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
 // @ViewChild('chart1') public chartE2: ElementRef;

  private _chart: any;

constructor(private restService: RestService){}


  public ngAfterViewInit() {
    let opts: any = {
        title: {
            text: 'Severity'
        }, credits: {
		                enabled: false
		              },
        tooltip: {
            pointFormat: '{series.name}: {point.percentage:.1f}%'
        },
        plotOptions: {
			            pie: {
			            	size:'50%',
			                allowPointSelect: true,
			                showInLegend: true,
			                cursor: 'pointer',
			                depth: 10,
			                overflow: 'justify',
			                center:["50%","60%"],
			                minSize:null,
			                align: 'right',
			                dataLabels: {
			                enabled: true,
			                format: '{point.percentage:.1f} %',
			                style: {
			                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'grey'
			                    }
			                }
			            }
			        },
			        legend: {
                itemStyle: {
                 font: '8pt Trebuchet MS, Verdana, sans-serif',
                 color: '#A0A0A0'
              },
              itemHoverStyle: {
                 color: '#55BF3B'
              },
              itemHiddenStyle: {
                 color: '#FFF'
              },

			            layout: 'vertical',
			            align: 'left',
			            verticalAlign: 'top',
			            x: -15,
			            y: -5,
                  floating: true,
			            borderWidth: null,
			            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
			            shadow: false
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
         margin: [0, 0, 0, 0],
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: false,
         type: 'pie',
          renderTo: this.chartEl.nativeElement
        };
        this._chart = new Highcharts.Chart(opts);

    }
}

}
