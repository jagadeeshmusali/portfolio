import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule],
  declarations: [
    ContactComponent
  ],
})
export class PortfolioFeatureContactModule {}
