import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {FeatureHomeModule} from "@portfolio/feature-home";
import { PortfolioFeatureContactModule } from '@portfolio/portfolio/feature-contact';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    FeatureHomeModule,
    PortfolioFeatureContactModule,
    StoreDevtoolsModule.instrument()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
