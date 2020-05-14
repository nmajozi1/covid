import { Component, OnInit } from '@angular/core';
import { ProvincialServiceService } from './provincial-service.service';
import { Observable } from 'rxjs';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-provincial-chart',
  templateUrl: './provincial-chart.component.html',
  styleUrls: ['./provincial-chart.component.scss']
})
export class ProvincialChartComponent implements OnInit {

  chartProvincial$: Observable<Chart>;

  constructor(private chartService: ProvincialServiceService) { }

  ngOnInit() {
    this.chartService.provincial().subscribe(provincialChart => {
      this.chartProvincial$ = provincialChart;
    });
  }

}
