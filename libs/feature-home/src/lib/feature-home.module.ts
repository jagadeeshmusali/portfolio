import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {PortfolioDataAccessUserModule, reducer, profileFeatureKey} from "@portfolio/portfolio/data-access-user";
import { IntroComponent } from './components/intro/intro.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
@NgModule({
  imports: [
    CommonModule,
    PortfolioDataAccessUserModule
  ],
  declarations: [
    HomeComponent,
    IntroComponent,
    HeaderComponent,
    AboutMeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FeatureHomeModule {}
