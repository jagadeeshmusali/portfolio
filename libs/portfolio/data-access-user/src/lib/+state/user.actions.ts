import { createAction, props } from '@ngrx/store';
import { Profile } from '@portfolio/common';

export const getUserProfile = createAction(
  '[User] Get User Profile',
  props<{ userId: string }>()
);

export const getUserProfileComplete = createAction(
  '[User] Get User Profile Complete',
  props<Profile>()
);
