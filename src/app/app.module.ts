import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewBlockComponent } from './overview-block/overview-block.component';
import { ChartComponent } from './chart/chart.component';
import { TabsComponent } from './tabs/tabs.component';
import { MapViewComponent } from './map-view/map-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovidComponent } from './covid/covid.component';
import { MatCardModule, MatTabsModule } from '@angular/material';
import { ChartModule } from 'angular-highcharts';
import { HttpClientModule } from '@angular/common/http';
import { ProvincialChartComponent } from './provincial-chart/provincial-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewBlockComponent,
    ChartComponent,
    TabsComponent,
    MapViewComponent,
    CovidComponent,
    ProvincialChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
