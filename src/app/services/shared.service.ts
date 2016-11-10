import { Injectable } from '@angular/core';

@Injectable()
export class ChartConfigService {
  chartType: string;

  setChartType(type: string) {
    this.chartType = type;
  }

  getChartType(): string {
    return this.chartType;
  }
}
