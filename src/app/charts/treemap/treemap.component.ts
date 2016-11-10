import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild  } from '@angular/core';
import data from './treemap.data'

var Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/heatmap.src')(Highcharts);
require('highcharts/modules/treemap.src')(Highcharts);
require('highcharts/modules/data.src')(Highcharts);
//import 'highcharts/modules/exporting.src';

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.css']
})

export class TreemapComponent implements AfterViewInit {     
    
   @ViewChild('chart') public chartEl: ElementRef;  
  private _chart: any;
  
   public ngAfterViewInit() {

       
        let opts: any = { 
           colorAxis: {
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            data: [{
                name: 'A',
                value: 6,
                colorValue: 1
            }, {
                name: 'B',
                value: 6,
                colorValue: 2
            }, {
                name: 'C',
                value: 4,
                colorValue: 3
            }, {
                name: 'D',
                value: 3,
                colorValue: 4
            }, {
                name: 'E',
                value: 2,
                colorValue: 5
            }, {
                name: 'F',
                value: 2,
                colorValue: 6
            }, {
                name: 'G',
                value: 1,
                colorValue: 7
            }]
        }],
        title: {
            text: 'Highcharts Treemap'
        }
             }

     if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {      
             //type: 'treemap',     
            renderTo: this.chartEl.nativeElement
        };

        this._chart = new Highcharts.Chart(opts);
    }

   }
}
