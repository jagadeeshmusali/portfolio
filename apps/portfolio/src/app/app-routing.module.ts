import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@portfolio/feature-home';
import {
  ContactComponent,
  SuccessComponent,
} from '@portfolio/portfolio/feature-contact';

const routes: Routes = [
  { path: 'portfolio', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'success', component: SuccessComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
