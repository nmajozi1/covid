import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartService } from './chart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart$: Observable<Chart>;
  chartProvincial$: Observable<Chart>;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.column().subscribe(chart => {
      console.log('THE RESPONSE: ', chart);
      this.chart$ = chart;
    });
  }

}
