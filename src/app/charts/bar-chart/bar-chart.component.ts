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
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  //@Input() barCharts: Observable<any>;
  @Input() barCharts:any;
  @ViewChild('chart') public chartEl: ElementRef;
  _chart: any;

  constructor(){}


  getData(barGraphReport : any){
    console.log("bar component");
   let dimensionVal = barGraphReport.graphResponse.configuration.attributes[0].name;
   let metricVal = barGraphReport.graphResponse.configuration.attributes[1].name;

   let xAxisData :Array<any>=[];
   let seriesData :Array<any>=[];

   let  resultData : Array<any>=[];
   resultData = barGraphReport.graphResponse.response[0].result;

 for (var j = 0; j < resultData.length; j++) {
   let Graphdata =resultData[j];
      xAxisData.push(Graphdata[dimensionVal]);
      seriesData.push(Graphdata[metricVal]);

 }
   let opt: any = {
       title: {
           text: barGraphReport.graphResponse.configuration.name,
           x: -20
       },credits: {
                   enabled: false
                 },
       chart:{
         type: 'bar'
       },
       xAxis: {
         name:barGraphReport.graphResponse.configuration.attributes[0].displayName,
       categories: xAxisData,
       title: {
           text:barGraphReport.graphResponse.configuration.attributes[0].displayName       }
       },
       yAxis: {
                     title: {
          text:barGraphReport.graphResponse.configuration.attributes[1].displayName  ,
               align: 'high'
           }
       },
       series: [{
           name: barGraphReport.graphResponse.configuration.attributes[1].displayName,
           data: seriesData

       }]
   };

return opt;
  }


  getRenderedData(barGraphReport : any){
    console.log("after filter bar component");
   let dimensionVal = barGraphReport[0].graphResponse.configuration.attributes[0].name;
   let metricVal = barGraphReport[0].graphResponse.configuration.attributes[1].name;

   let xAxisData :Array<any>=[];
   let seriesData :Array<any>=[];

   let  resultData : Array<any>=[];
   resultData = barGraphReport[0].graphResponse.response[0].result;

 for (var j = 0; j < resultData.length; j++) {
   let Graphdata =resultData[j];
      xAxisData.push(Graphdata[dimensionVal]);
      seriesData.push(Graphdata[metricVal]);

 }
   let opt: any = {
       title: {
           text: barGraphReport[0].graphResponse.configuration.name,
           x: -20
       },credits: {
                   enabled: false
                 },
       chart:{
         type: 'bar'
       },
       xAxis: {
         name:barGraphReport[0].graphResponse.configuration.attributes[0].displayName,
       categories: xAxisData,
       title: {
           text:barGraphReport[0].graphResponse.configuration.attributes[0].displayName       }
       },
       yAxis: {
                     title: {
          text:barGraphReport[0].graphResponse.configuration.attributes[1].displayName  ,
               align: 'high'
           }
       },
       series: [{
           name: barGraphReport[0].graphResponse.configuration.attributes[1].displayName,
           data: seriesData

       }]
   };

return opt;
  }

  public ngOnInit() {
     //this.barCharts.subscribe(() => {
     if(!this.barCharts[0])
     {
     this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.barCharts));
   }
   //});
}


  ngOnChanges(barCharts) {
  console.log("In On Change- BarChart");
  if (this.barCharts)
  {
    if (this.barCharts[0])
    {
        console.log("rerender In On Change- BarChart");
  this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getRenderedData(this.barCharts));
}
}
    }

}
