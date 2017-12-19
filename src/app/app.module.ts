import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExperimentComponent } from './experiment/experiment.component';
import {FormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app.routes';
import { AnalyticsComponent } from './analytics/analytics.component'


@NgModule({
  declarations: [
    AppComponent,
    ExperimentComponent,
    HomeComponent,
    HeaderComponent,
    AnalyticsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
