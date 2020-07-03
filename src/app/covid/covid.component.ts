import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GenericService } from '../generic.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CovidComponent implements OnInit {

  totalInfections: number;
  cumulativeTotalInfections: number;
  totalTest: any;
  testedBy: any;
  totalDeaths: any;
  totalRecovered: any;

  constructor(private genericService: GenericService) { }

  ngOnInit() {

    this.genericService.fetchCovidData().subscribe(results => {
      const latest = results.data.slice(Math.max(results.data.length) - 2);
      latest.pop();

      this.cumulativeTotalInfections = +latest[0].total;
      this.totalInfections = +latest[0].total;
    });

    this.genericService.fetchTestData().subscribe(results => {
      const testData = results.data.slice(Math.max(results.data.length) - 2);
      testData.pop();

      console.log('TEST: ', testData);

      this.totalInfections = this.totalInfections - +testData[0].recovered - +testData[0].deaths;
      this.totalTest = testData[0].cumulative_tests;
      this.testedBy = testData[0].date;
      this.totalDeaths = testData[0].deaths;
      this.totalRecovered = testData[0].recovered;
    });

  }

}
