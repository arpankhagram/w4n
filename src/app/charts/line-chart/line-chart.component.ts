import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild,Input,OnInit} from '@angular/core';
import { RestService }  from '../../services/rest.service';

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

  constructor(){}


  getData(lineGraphReports : any){
console.log("line graph reports");
console.log(lineGraphReports);
      let dimensionVal = lineGraphReports.graphResponse.configuration.attributes[0].name;
      let metricVal = lineGraphReports.graphResponse.configuration.attributes[1].name;

      let xAxisData :Array<any>=[];
      let seriesData :Array<any>=[];

      let  resultData : Array<any>=[];
      resultData = lineGraphReports.graphResponse.response[0].result;
      console.log("resultData "  );
      console.log(resultData);

    for (var j = 0; j < resultData.length; j++) {
      let Graphdata =resultData[j];
      xAxisData.push(Graphdata[dimensionVal]);
      seriesData.push(Graphdata[metricVal]);
    }

      let opt: any = {
          title: {
              text: lineGraphReports.graphResponse.configuration.name,
              x: -20
          },credits: {
                      enabled: false
                    },
          chart:{
            type: 'line'
          },
          xAxis: {
            name:lineGraphReports.graphResponse.configuration.attributes[1].displayName,
          categories: xAxisData,
          title: {
              text:lineGraphReports.graphResponse.configuration.attributes[0].displayName       }

          },
          yAxis: {

              title: {
                  text:lineGraphReports.graphResponse.configuration.attributes[1].displayName       }
          },

          series: [{
            name: lineGraphReports.graphResponse.configuration.attributes[1].displayName,
            data: seriesData



          }]
      };

  return opt;
  }

  getRenderedData(lineGraphReports : any){
    console.log("after filter bar component");
    console.log("line graph reports");
    console.log(lineGraphReports[0]);
          let dimensionVal = lineGraphReports[0].graphResponse.configuration.attributes[0].name;
          let metricVal = lineGraphReports[0].graphResponse.configuration.attributes[1].name;

          let xAxisData :Array<any>=[];
          let seriesData :Array<any>=[];

          let  resultData : Array<any>=[];
          resultData = lineGraphReports[0].graphResponse.response[0].result;
          console.log("resultData "  );
          console.log(resultData);

        for (var j = 0; j < resultData.length; j++) {
          let Graphdata =resultData[j];
          xAxisData.push(Graphdata[dimensionVal]);
          seriesData.push(Graphdata[metricVal]);
        }

          let opt: any = {
              title: {
                  text: lineGraphReports[0].graphResponse.configuration.name,
                  x: -20
              },credits: {
                          enabled: false
                        },
              chart:{
                type: 'line'
              },
              xAxis: {
                name:lineGraphReports[0].graphResponse.configuration.attributes[1].displayName,
              categories: xAxisData,
              title: {
                  text:lineGraphReports[0].graphResponse.configuration.attributes[0].displayName       }

              },
              yAxis: {

                  title: {
                      text:lineGraphReports[0].graphResponse.configuration.attributes[1].displayName       }
              },

              series: [{
                name: lineGraphReports[0].graphResponse.configuration.attributes[1].displayName,
                data: seriesData



              }]
          };

      return opt;
  }




  public ngOnInit() {

    console.log("configJson");

    console.log("this.lineCharts");
    console.log(this.lineCharts);
    // To append the charts
    if (!this.lineCharts[0])
    {
     this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.lineCharts));
   }
    //  $('#ch').highcharts(opts);
    console.log("this._chart");
    console.log(this._chart);

}

ngOnChanges(lineCharts) {
console.log("In On Change- lineCharts");
if (this.lineCharts)
{
  console.log(this.lineCharts);
  if (this.lineCharts[0])
  {
this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getRenderedData(this.lineCharts));
}
}
  }
}
