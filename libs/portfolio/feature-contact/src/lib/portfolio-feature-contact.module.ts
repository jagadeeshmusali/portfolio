import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import {RouterModule} from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [CommonModule, RouterModule, FontAwesomeModule],
  declarations: [
    ContactComponent
  ],
})
export class PortfolioFeatureContactModule {}
