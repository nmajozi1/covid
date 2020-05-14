import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Chart } from 'angular-highcharts';
import { GenericService } from '../generic.service';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(public http: HttpClient, private genericService: GenericService) { }

  column(): Observable<any> {

    return this.genericService.fetchCovidData().pipe(
      map(results => {

        const lastFive = results.data.slice(Math.max(results.data.length - 8));
        lastFive.pop();

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
            categories: lastFive.map((item) => item.date),
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
              name: 'Last 7 days',
              data: lastFive.map((item, index) => ({
                x: index,
                y: +item.total,
                name: item.date
              }))
            }
          ]
        };

        return new Chart(options);
      })
    );
  }

}
