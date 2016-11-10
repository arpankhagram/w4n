import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild  } from '@angular/core';

import custWorld from './custom-world.data';
import data from './world-map.data';


var Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/map')(Highcharts);
import 'highcharts/modules/map.src';
import 'highcharts/modules/data.src';
import 'highcharts/modules/exporting.src';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})

export class WorldMapComponent implements AfterViewInit {
 

   @ViewChild('chart') public chartEl: ElementRef;  
  private _chart: any;

  public ngAfterViewInit() {

    let opts: any = {
        
          title: {
                text: 'World Map'
            },

            legend: {
                title: {
                    text: 'Population density per km²',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            tooltip: {
                backgroundColor: 'none',
                borderWidth: 0,
                shadow: false,
                useHTML: true,
                padding: 0,
                pointFormat: '<span class="f32"><span class="flag {point.flag}"></span></span>' +
                    ' {point.name}: <b>{point.value}</b>/km²',
                positioner: function () {
                    return { x: 0, y: 250 };
                }
            },

            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },

            series: [{
                data: data,
                mapData: custWorld,
                joinBy: ['iso-a2', 'code'],
                name: 'Population density',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                }
            }]

    }

    if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'map',
            renderTo: this.chartEl.nativeElement
        };

        this._chart = new Highcharts.Map(opts);
    }
  }

}
