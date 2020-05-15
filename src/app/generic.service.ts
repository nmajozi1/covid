import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  cumulativeUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_confirmed.csv';
  confirmedUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_timeline_confirmed.csv';
  deathsUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_timeline_deaths.csv';
  testingCumulativeUrl = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_timeline_testing.csv';
  testingProvincialUrl
  = 'https://raw.githubusercontent.com/dsfsi/covid19za/master/data/covid19za_provincial_cumulative_timeline_testing.csv';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  fetchCovidData(): Observable<any> {
      this.headers = new HttpHeaders();

      const options: {
        headers?: HttpHeaders;
        responseType: 'text';
      } = {
        responseType: 'text'
      };

      return this.http.get(this.cumulativeUrl, options).pipe(map(results => {
        return Papa.parse(results, { header: true, });
      }));
  }

  fetchDeathData(): Observable<any> {
    this.headers = new HttpHeaders();

    const options: {
      headers?: HttpHeaders;
      responseType: 'text'
    } = {
      responseType: 'text'
    };

    return this.http.get(this.confirmedUrl, options).pipe(map(results => {
      return Papa.parse(results, { header: true, });
    }));
  }

  fetchTestData(): Observable<any> {
    this.headers = new HttpHeaders();

    const options: {
      headers?: HttpHeaders;
      responseType: 'text'
    } = {
      responseType: 'text'
    };

    return this.http.get(this.testingCumulativeUrl, options).pipe(map(results => {
      return Papa.parse(results, { header: true, });
    }));
  }
}
