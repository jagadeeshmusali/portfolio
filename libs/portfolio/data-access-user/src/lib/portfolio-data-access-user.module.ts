import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { profileFeatureKey, reducer } from './+state/user.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(profileFeatureKey, reducer)],
})
export class PortfolioDataAccessUserModule {}
