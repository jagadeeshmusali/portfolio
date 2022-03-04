import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ACE_CONFIG, AceConfigInterface, AceModule} from 'ngx-ace-wrapper';
import {CodeEditorFeatureEditorModule} from "@portfolio/code-editor/feature-editor";
const DEFAULT_ACE_CONFIG: AceConfigInterface = {
};
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [AceModule,CodeEditorFeatureEditorModule, BrowserModule],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
