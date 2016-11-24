import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild,Input,OnInit } from '@angular/core';
import { RestService }  from '../../services/rest.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

declare var $: any;


const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-multi-line',
  templateUrl: './multi-line.component.html',
  styleUrls: ['./multi-line.component.css']
})
export class MultiLineComponent implements OnInit {
  //@Input() multilineChart: Observable<any>;
  @Input() multilineChart: any;
  @ViewChild('chart') public chartEl: ElementRef;

  private _chart: any;

  constructor(){}

  getData(multiLineGraphReport : any){
    let dimensionVal = multiLineGraphReport.graphResponse.configuration.attributes[0].name;
    let metricVal = multiLineGraphReport.graphResponse.configuration.attributes[1].name;
    let timestampSeries : Array<any> = [];
    let seriesData : Array<any> = [];

    let zattribute : Map<any,any[]> = new Map();


    let yAxisAttribute =  multiLineGraphReport.graphResponse.configuration.attributes[1].displayName;

     let timeSeriesResponseData = multiLineGraphReport.graphResponse.response;

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
    let opt: any =  {
       title: {
         text: multiLineGraphReport.graphResponse.configuration.name,
         x: -20 //center
     },
     credits: {
                 enabled: false
               },
     subtitle: {
         text: '',
         x: -20
     },
     xAxis: {
         categories: timestampSeries,
         title: {
             text: multiLineGraphReport.graphResponse.configuration.attributes[0].displayName
         },
     },
     yAxis: {

        min:0,
         title: {
             text: yAxisAttribute
         },
         plotLines: [{
             value: 0,
             width: 1,
             color: '#808080'
         }]
     },
     tooltip: {
         valueSuffix: 'KBs'
     },
     legend: {
         layout: 'vertical',
         align: 'right',
         verticalAlign: 'middle',
         borderWidth: 0
     },
     series: seriesData
   };
  return opt;
  }

  getRenderedData(multiLineGraphReport : any){
    console.log("Render method is called Kushal");
    console.log(multiLineGraphReport);
    console.log(multiLineGraphReport[0].graphResponse);
    let dimensionVal = multiLineGraphReport[0].graphResponse.configuration.attributes[0].name;
    let metricVal = multiLineGraphReport[0].graphResponse.configuration.attributes[1].name;
    let timestampSeries : Array<any> = [];
    let seriesData : Array<any> = [];

    let zattribute : Map<any,any[]> = new Map();


    let yAxisAttribute =  multiLineGraphReport[0].graphResponse.configuration.attributes[1].displayName;

     let timeSeriesResponseData = multiLineGraphReport[0].graphResponse.response;

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
    let opt: any =  {
       title: {
         text: multiLineGraphReport[0].graphResponse.configuration.name,
         x: -20 //center
     },
     credits: {
                 enabled: false
               },
     subtitle: {
         text: '',
         x: -20
     },
     xAxis: {
         categories: timestampSeries,
         title: {
             text: multiLineGraphReport[0].graphResponse.configuration.attributes[0].displayName
         },
     },
     yAxis: {

        min:0,
         title: {
             text: yAxisAttribute
         },
         plotLines: [{
             value: 0,
             width: 1,
             color: '#808080'
         }]
     },
     tooltip: {
         valueSuffix: 'KBs'
     },
     legend: {
         layout: 'vertical',
         align: 'right',
         verticalAlign: 'middle',
         borderWidth: 0
     },
     series: seriesData
   };
return opt;
  }

  public ngOnInit() {
    // this.multilineChart.subscribe(() => {
    if (!this.multilineChart[0])
    {
     this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.multilineChart));
   //});
 }
  }

  ngOnChanges(multilineChart) {
  console.log("In On Change- multilineChart");
  if (this.multilineChart)
  {
    if (this.multilineChart[0])
    {
  this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getRenderedData(this.multilineChart));
}
}
    }

}
