import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';


const routes: Routes = [
  { path: 'covid-sa', component: CovidComponent },
  { path: '', redirectTo: '/covid-sa', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
