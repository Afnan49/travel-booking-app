import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeHeaderComponent } from './shared/home-header/home-header.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TripPlanComponent } from './pages/home/trip-plan/trip-plan.component';
import { TripSearchComponent } from './pages/home/trip-search/trip-search.component';
import { DestinationsComponent } from './pages/home/destinations/destinations.component';
import { AdventureTravelComponent } from './pages/home/adventureTravel/adventureTravel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeHeaderComponent,
    TripPlanComponent,
    TripSearchComponent,
    DestinationsComponent,
    AdventureTravelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
