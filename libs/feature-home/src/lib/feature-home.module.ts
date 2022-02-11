import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {PortfolioDataAccessUserModule, reducer, profileFeatureKey} from "@portfolio/portfolio/data-access-user";
import {StoreModule} from "@ngrx/store";
@NgModule({
  imports: [
    CommonModule,
    PortfolioDataAccessUserModule
  ],
  declarations: [
    HomeComponent
  ],
})
export class FeatureHomeModule {}
