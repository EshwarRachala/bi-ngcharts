import { Component } from '@angular/core';
import { ChartConfig } from './config.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  settings = { fill: 'steelblue' };
  dataset = [
    { text: 'a', value: .5 },
    { text: 'b', value: .9 },
    { text: 'c', value: 1.0 },
    { text: 'd', value: 2.0 },
    { text: 'e', value: 0.4 },
    { text: 'f', value: .2 }];
}
