import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements AfterViewInit {

@ViewChild('chart') public chartEl: ElementRef;
  
  private _chart: any;
  
  public ngAfterViewInit() {
       let opts: any = {
         title: {
            text: 'Overlay'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            title: {
                text: 'Flats'
            }
        },

        series: [{
            data: [1, 3, 5, 2, 3, 9, 6, 7, 3, 5, 4, 3]
        }],
        labels: {
            items: [{
                html: "<b>Labelizing as per the content...</b>",
                style: {
                    left: '100px',
                    top: '100px',
                    width: '50px'
                }
            }]
        }
       }
       if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'line',
            renderTo: this.chartEl.nativeElement
        };

        this._chart = new Highcharts.Chart(opts);
    }
  }

}
