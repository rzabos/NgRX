import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { User } from '../user';
import * as UserActions from './user.actions';

export interface UserState {
  maskUserName: boolean;
  currentUser: string;
}

const initialState: UserState = {
  maskUserName: false,
  currentUser: '',
};

const getUserState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserState,
  (state) => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserState,
  (state) => state.currentUser
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.maskUserName, (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
