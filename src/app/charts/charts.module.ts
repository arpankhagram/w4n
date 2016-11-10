import { NgModule } from '@angular/core';
import { FormsModule}  from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }     from '@angular/common';
import { ChartsComponent } from './charts.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { StackedChartComponent } from './stacked-chart/stacked-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { TreemapComponent } from './treemap/treemap.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { MultiLineComponent } from './multi-line/multi-line.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { LocalDirective } from './local.directive';
import { OverlayComponent } from './overlay/overlay.component';
import { MixedComponent } from './mixed/mixed.component';
import { StackedGroupedColumnComponent } from './stacked-grouped-column/stacked-grouped-column.component';
import { IconsModule } from './icons/icons.module';
import { DualGaugeComponent } from './dual-gauge/dual-gauge.component';
//import { IconsComponent } from './icons/icons.component';

@NgModule({
    declarations: [ChartsComponent, PieChartComponent, LineChartComponent, BarChartComponent, StackedChartComponent, StackedBarChartComponent, ColumnChartComponent, GaugeChartComponent, WorldMapComponent, TreemapComponent, HeatmapComponent, MultiLineComponent, AreaChartComponent, TimeLineComponent, LocalDirective, OverlayComponent, MixedComponent, StackedGroupedColumnComponent, DualGaugeComponent ],
    imports :[IconsModule,CommonModule],
    exports : [ChartsComponent,PieChartComponent,BarChartComponent,LineChartComponent,GaugeChartComponent],
})

export class ChartsModule {

}
