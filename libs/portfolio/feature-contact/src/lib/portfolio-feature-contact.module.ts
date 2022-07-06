import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SuccessComponent } from './components/success/success.component';
import { FormsModule } from '@angular/forms';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PortfolioDataAccessHelloModule } from '@portfolio/portfolio/data-access-hello';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    PortfolioDataAccessHelloModule,
  ],
  declarations: [ContactComponent, SuccessComponent],
})
export class PortfolioFeatureContactModule {}
