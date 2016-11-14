import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';

const Highcharts = require('highcharts/highcharts.src');

require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
declare var $:any;

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements AfterViewInit {
@ViewChild('chart') public chartEl: ElementRef;
    constructor() {



    }



  private _chart: any;

  onInit(){

  }

  public ngAfterViewInit() {

        var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        }, credits: {
		                enabled: false
		              },

        title: {text:'Availability'},

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [80, '#55BF3B'], // green
                [60, '#DDDF0D'], // yellow
                [40, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };



        //     gaugeOptions.chart = {
        //     type: 'solidgauge',
        //     renderTo: this.chartEl.nativeElement
        // };





       $(this.chartEl.nativeElement).highcharts(Highcharts.merge(
            gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Availability'
            }
        },

        series: [{
            name: 'Availability',
            data: [95],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">Average Availability(%)</span></div>'
            },
            tooltip: {
                valueSuffix: '%'
            }
          }]

         }));


          setTimeout(() => {
             var chart =  $(this.chartEl.nativeElement).highcharts();
        if (chart) {
            var point = chart.series[0].points[0];
            var inc = Math.random() - 0.5;
            var newVal = point.y + inc;

            if (newVal < 0 || newVal > 5) {
                newVal = point.y - inc;
            }

            point.update(newVal);
        }
    }, 2);

       }
//--naive

}
