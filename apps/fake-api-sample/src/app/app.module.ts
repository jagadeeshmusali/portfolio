import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FakeApiModule } from 'ngx-fake-api';
import { FAKE_API_CONFIG } from '../mocks';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FakeApiModule.forRoot(FAKE_API_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
