import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "@portfolio/feature-home";

const routes: Routes = [
   { path: 'portfolio', component: HomeComponent, pathMatch: 'full' },
   { path: '', redirectTo: '/portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
