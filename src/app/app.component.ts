import { Component } from '@angular/core';
import { ChartConfig } from './config.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [{ 'name': 'peter', 'age': 34 }, { 'name': 'jason', 'age': 28 }];
  margin: any = { left: 120, right: 40, top: 5, bottom: 30 };
  width = 300;
  height = 200;
  config: any;

  constructor() {
    this.config = {
      settings: { fill: 'red' },
      dataset: [{ text: 'peter', value: 34 }, { text: 'jason', value: 28 }]
    };
  }
}
