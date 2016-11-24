import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild,Input ,OnInit} from '@angular/core';
import { RestService }  from '../../services/rest.service';




const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit  {
@Input() pieCharts: any;
 @ViewChild('chart') public chartEl: ElementRef;
 // @ViewChild('chart1') public chartE2: ElementRef;

  private _chart: any;

constructor(private restService: RestService){}


getData(pieGraphReports : any){
  let dimensionVal = pieGraphReports.graphResponse.configuration.attributes[0].name;
  let metricVal = pieGraphReports.graphResponse.configuration.attributes[1].name;


  let seriesData :Array<any>=[];

  let  resultData : Array<any>=[];
  resultData = pieGraphReports.graphResponse.response[0].result;

for (var j = 0; j < resultData.length; j++) {
  let Graphdata =resultData[j];
  if((Graphdata[dimensionVal])!=null){
      let data ={
        "name": Graphdata[dimensionVal],
        "y": Graphdata[metricVal]
      }
seriesData.push(data);
}
}

  let opts: any = {
      title: {
          text: pieGraphReports.graphResponse.configuration.name,
      }, credits: {
                  enabled: false
                },

chart:{
          type: 'pie'
        },

      tooltip: {
          pointFormat: '{series.name}: {point.percentage:.1f}%'
      },
      plotOptions: {
                pie: {
                  size:'80%',
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
          data:seriesData

      }]
  };
return opts;


}

public ngOnInit() {
  // To append the charts
   this._chart = new Highcharts.Chart(this.chartEl.nativeElement, this.getData(this.pieCharts));

}

}
