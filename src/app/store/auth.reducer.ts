
import { createAction, createReducer, on } from '@ngrx/store';

export interface AuthState {
  username: string;
}

export const initialState: AuthState = {
  username: '',
};

export const setLoggedInUser = createAction('[Auth] Set Logged In User', (username: string) => ({ username }));

export const authReducer = createReducer(
  initialState,
  on(setLoggedInUser, (state, { username }) => ({ ...state, username })),
);
