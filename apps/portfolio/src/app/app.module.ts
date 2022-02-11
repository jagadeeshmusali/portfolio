import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducer, profileFeatureKey} from "@portfolio/portfolio/data-access-user";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({
    //   [profileFeatureKey]: reducer
    // }),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
