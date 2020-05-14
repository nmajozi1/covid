import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincialChartComponent } from './provincial-chart.component';

describe('ProvincialChartComponent', () => {
  let component: ProvincialChartComponent;
  let fixture: ComponentFixture<ProvincialChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincialChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
