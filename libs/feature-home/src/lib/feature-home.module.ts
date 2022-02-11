import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {PortfolioDataAccessUserModule, reducer, profileFeatureKey} from "@portfolio/portfolio/data-access-user";
@NgModule({
  imports: [
    CommonModule,
    PortfolioDataAccessUserModule,
  ],
  declarations: [
    HomeComponent
  ],
})
export class FeatureHomeModule {}
