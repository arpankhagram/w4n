import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild,Input,OnInit } from '@angular/core';
import { RestService }  from '../../services/rest.service';

declare var $: any;

const Highcharts = require('highcharts/highcharts.src');

require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);


@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit {
@Input() guageChart: any;
@ViewChild('chart') public chartEl: ElementRef;

  _chart: any;
  test: Array<any> = [];
  constructor(){}

    getData(gaugeGraphReport : any){
      let attribute = gaugeGraphReport.graphResponse.configuration.attributes[0].name;
      let opts: any ={

      chart: {
          type: 'solidgauge'
      }, credits: {
                  enabled: false
                },

      title: {text:gaugeGraphReport.graphResponse.configuration.name},

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
        min: 0,
        max: 100,
          stops: [

              [30, '#DF5353'] // red
          ],
          lineWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          title: {
              text: '',
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
      },  series: [{
            name: attribute,
            data: [gaugeGraphReport.graphResponse.response[0].result[attribute]],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">Average Availability(%)</span></div>'
            },
            tooltip: {
                valueSuffix: '%'
            }
          }]
  };

  return opts;

    }



    ngOnInit(){
      if (!this.guageChart[0])
      {
       this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.guageChart));
     }
     }


     ngOnChanges(guageChart) {
     console.log("In On Change- guageChart");
     if (this.guageChart)
     {
       if (this.guageChart[0])
       {
     this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.guageChart[0]));
     }
     }
       }


//--naive

}
