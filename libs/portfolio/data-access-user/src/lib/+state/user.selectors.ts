import { createSelector } from '@ngrx/store';
import { profileFeature } from './user.reducer';


export const profileSelector = createSelector(
  profileFeature.selectProfile,
  (state) => state
);

export const loadingSelector = createSelector(
  profileFeature.selectLoading,
  (state) => state
);

export const userSelector = createSelector(
  profileFeature.selectProfile,
  (state) => state.user
);
