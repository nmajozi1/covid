import { Injectable, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chart } from 'angular-highcharts';
import { saveAs } from 'file-saver';
import { GenericService } from '../generic.service';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class ProvincialServiceService {

  header = false;

  constructor(private genericService: GenericService) { }

  provinces: any = [];
  combined: any = [];
  converted$: Observable<any>;

  provincial(): Observable<any> {

    return this.genericService.fetchCovidData().pipe(
      map(results => {
        this.transformData(results);

        const options: any = {
          chart: {
            type: 'column',
            backgroundColor: 'transparent',
          },
          xAxis: {
            labels: {
              style: {
                color: '#FFFFFF'
              }
            },
            visible: true,
            categories: ['EC', 'FS', 'GP', 'KZN', 'LP', 'MP', 'NC', 'NW', 'WC'],
          },
          yAxis: {
            visible: false,
          },
          title: {
            text: ''
          },
          legend: {
            reversed: false
          },
          tooltip: {
            enabled: false,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            column: {
              dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                  fontWeight: 'bold',
                  color: 'white'
                }
              },
              startAngle: -90,
              endAngle: 90,
              borderRadius: 5,
              center: ['50%', '75%'],
              size: 500
            }
          },
          credits: {
            enabled: false
          },
          series: [
            {
              showInLegend: false,
              name: 'Last 10 days',
              data: this.combined.map((item, index) => ({
                x: index,
                y: +item.infected,
                name: item.name
              }))
            }
          ]
        };

        return new Chart(options);
      })
    );
  }

  transformData(results): any {
    const lastOne = results.data.slice(Math.max(results.data.length - 2, 1));
    const value = Object.values(lastOne[0]);

    this.provinces = Object.keys(lastOne[0]).map((provinces, index) => ({
      name: provinces,
      infected: value[index],
    }));

    this.provinces.forEach(element => {
      if (element.name.length === 2 || element.name.length === 3) {
        this.combined.push(element);
      }
    });
  }
}
