// Loads some required modules from Angular.
import { Component, Input, OnChanges, AfterViewInit, ViewChild } from '@angular/core';
// Loads the code needed to manipulate the visualization
import { BubblesComponent } from '@bluebi/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chart',
  template: '<svg #target width="900" height="300"></svg>'
})

export class ChartComponent implements OnChanges, AfterViewInit {

  @Input() values: number[];
  @ViewChild('target') target: any;
  chart: BubblesComponent;

  constructor() {
  }

  ngOnChanges(changes: any) {
    if (this.chart) {
      this.chart.render(changes.values);
    }
  }

  ngAfterViewInit() {
    this.chart = new BubblesComponent(this.target.nativeElement);
    this.chart.render(this.values);
  }
}
