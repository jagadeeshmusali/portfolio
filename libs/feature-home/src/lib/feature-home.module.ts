import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {PortfolioDataAccessUserModule, reducer, profileFeatureKey} from "@portfolio/portfolio/data-access-user";
import { IntroComponent } from './components/intro/intro.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  imports: [
    CommonModule,
    PortfolioDataAccessUserModule,
  ],
  declarations: [
    HomeComponent,
    IntroComponent,
    HeaderComponent
  ],
})
export class FeatureHomeModule {}
