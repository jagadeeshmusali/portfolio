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

export const tagLineSelector = createSelector(
  profileFeature.selectProfile,
  (state) => state.tagLine
);

export const greetingMessageSelector = createSelector(
  profileFeature.selectProfile,
  (state) => state.greetingMessage
);

export const aboutMeSelector = createSelector(
  profileFeature.selectProfile,
  (state) => state.aboutMe
);

export const technologiesSelector = createSelector(
  profileFeature.selectProfile,
  (state) => state.technologies
);

export const testimonialsSelector = createSelector(
  profileFeature.selectProfile,
  (state) => state.testimonials
);
