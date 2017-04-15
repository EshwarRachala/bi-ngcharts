import { Component } from '@angular/core';
import { ChartService } from 'ng2charts';
import { BarData, LineData } from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart: ChartService;
  settings: any;
  dataset: any;
  linechart: any;

  constructor(chartService: ChartService) {
    this.chart = chartService;
    this.settings = { fill: 'steelblue' };
    this.dataset = BarData;

    this.linechart = LineData;
  }

}
