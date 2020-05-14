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

  constructor(private genericService: GenericService) { }

  ngOnInit() {
    this.genericService.fetchCovidData().subscribe(results => {
      const latest = results.data.slice(Math.max(results.data.length) - 2);
      latest.pop();

      console.log('LATEST: ', latest);

      this.totalInfections = latest[0].total;
    });
  }

}
