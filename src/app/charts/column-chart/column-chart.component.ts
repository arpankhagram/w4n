import { Component, ElementRef, Input,OnInit, OnDestroy, ViewChild } from '@angular/core';

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {
   @Input() columnChart: any;
@ViewChild('chart') public chartEl: ElementRef;

  private _chart: any;

    getData(columnGraphReport : any){
      let dimensionVal = columnGraphReport.graphResponse.configuration.attributes[0].name;
      let metricVal = columnGraphReport.graphResponse.configuration.attributes[1].name;
      let timestampSeries : Array<any> = [];
      let seriesData : Array<any> = [];

      let zattribute : Map<any,any[]> = new Map();


      let yAxisAttribute =  columnGraphReport.graphResponse.configuration.attributes[1].name

       let timeSeriesResponseData = columnGraphReport.graphResponse.response;

       for (var j = 0; j < timeSeriesResponseData.length; j++) {
         let Graphdata =timeSeriesResponseData[j];
            timestampSeries.push(Graphdata.timestamp);
            let result = Graphdata.result;
               for (var i = 0; i < result.length; i++) {
                 let entry = result[i];
                 let value : Array<any>=[];

                 if((entry[dimensionVal]) !=null){
                   if( (entry[dimensionVal]) != '10.83.205.243'){
                 value = zattribute.get((entry[dimensionVal]));
                 if(value != null)
                 {
                        value.push((entry[metricVal])/1048576 )
                  }
                 else
                 {
                   value=[];
                   value.push((entry[metricVal])/1048576);
                 }
                 zattribute.set(entry[dimensionVal] ,value);
               }
  }
               }

       }

       console.log("this.timestampSeries");
                    console.log(timestampSeries);
                    console.log("this.zattribute");
                    console.log(zattribute);

                    zattribute.forEach((value: [any[]], key: String) => {

                        let data ={

                          "name": key,
                          "data": value
                        }
                        seriesData.push(data);

                    });

                    console.log("this.seriesData");
                    console.log(seriesData);

      let opts: any = {
          title: {
              text: columnGraphReport.graphResponse.configuration.name
          },credits: {
                      enabled: false
                    },

         chart: {
              type: 'column'
              },

          subtitle: {
              text: ''
          },
          xAxis: {
              categories: timestampSeries,
              crosshair: true,
              title: {
                  text:columnGraphReport.graphResponse.configuration.attributes[0].displayName       }
          },
          yAxis: {
              min: 0,

              title: {
                  text:columnGraphReport.graphResponse.configuration.attributes[1].displayName       }
          },  legend: {
              itemStyle: {
               font: '8pt Trebuchet MS, Verdana, sans-serif',
               color: 'black'
            },
            itemHoverStyle: {
               color: '#55BF3B'
            },
            itemHiddenStyle: {
               color: '#A0A0A0'
            },

                layout: 'vertical',
                align: 'right',
                verticalAlign: 'bottom',
                x: -15,
                y: -50,
                floating: false,
                borderWidth: null,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },tooltip: {
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
          series:seriesData
      };
      return opts;
    }

    public ngOnInit() {
       this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.columnChart));
    }

}
