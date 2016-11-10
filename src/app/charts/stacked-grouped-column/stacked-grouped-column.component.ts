import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-stacked-grouped-column',
  templateUrl: './stacked-grouped-column.component.html',
  styleUrls: ['./stacked-grouped-column.component.css']
})
export class StackedGroupedColumnComponent implements AfterViewInit {
 @ViewChild('chart') public chartEl: ElementRef;
  
  private _chart: any;
  
  public ngAfterViewInit() {
    let opts: any = {
         title: {
            text: 'Stacked & Grouped Column'
        },

        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of fruits'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: 'Jane',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: 'Janet',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }]
    }
      if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'column',
            renderTo: this.chartEl.nativeElement
        };

        this._chart = new Highcharts.Chart(opts);
    }
  }

}
