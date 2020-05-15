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

  totalInfections: any;
  totalTest: any;
  testedBy: any;
  totalDeaths: any;
  totalRecovered: any;

  constructor(private genericService: GenericService) { }

  ngOnInit() {

    this.genericService.fetchCovidData().subscribe(results => {
      const latest = results.data.slice(Math.max(results.data.length) - 2);
      latest.pop();

      this.totalInfections = latest[0].total;
    });

    this.genericService.fetchTestData().subscribe(results => {
      const testData = results.data.slice(Math.max(results.data.length) - 2);
      testData.pop();

      console.log(testData);

      console.log('Test Data: ', testData[0].cumulative_tests, ' || Date: ', testData[0].date);

      this.totalTest = testData[0].cumulative_tests;
      this.testedBy = testData[0].date;
      this.totalDeaths = testData[0].deaths;
      this.totalRecovered = testData[0].recovered;
    });

  }

}
