

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {ExperimentComponent} from './experiment/experiment.component'
import {HomeComponent} from './home/home.component'
import {AnalyticsComponent} from './analytics/analytics.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'experiment',
    pathMatch: 'full'
  },
  {
    path: 'experiment',
    component: ExperimentComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}