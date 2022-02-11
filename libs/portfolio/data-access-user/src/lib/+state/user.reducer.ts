import {Action, createFeature, createReducer, on} from '@ngrx/store';
import * as UserActions from './user.actions';
import {Profile} from "@portfolio/common";
import {profileMock} from "../_mocks/profile.mock";
//TODO: Update lib name to profile
export interface State {
  profile: Profile,
  loading: boolean
}

export const initialState: State = {
  profile: profileMock,
  loading: false
}

export const profileFeature = createFeature({
  name: 'profile',
  reducer: createReducer(
    initialState,
    on(UserActions.getUserProfile, (state) => ({
      ...state,
      loading: true,
    })),
    on(UserActions.getUserProfileComplete, (state, payload) => ({
      ...state,
      profile: payload,
      loading: false,
    }))
  ),
});

export const profileFeatureKey = 'profile';

export const {
  name, // feature name
  reducer, // feature reducer
  selectProfileState, // feature selector
  selectProfile, // selector for `books` property
  selectLoading, // selector for `loading` property
} = profileFeature;
