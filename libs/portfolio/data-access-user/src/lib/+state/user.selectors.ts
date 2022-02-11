import { createSelector } from '@ngrx/store';
import { profileFeature } from './user.reducer';


export const profileSelector = createSelector(
  profileFeature.selectProfileState,
  (state) => state.profile
);

export const loadingSelector = createSelector(
  profileFeature.selectProfileState,
  (state) => state.loading
);

export const userSelector = createSelector(
  profileFeature.selectProfileState,
  (state) => state.profile?.user
);
