import {
  adapter,
  initialState,
  State,
  UserPayloadType,
  UserState,
} from './user.slice';
import { UserResponse } from '../models/user.model';
import { Action, createAction, createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';

export const reducer = createReducer(
  initialState,
  on(userActions.loadUsersSuccess, (state, { users }) => {
    return adapter.setAll(users, state);
  }),
  on(userActions.updateMultipleSuccess, (state, { users }) => {
    return adapter.setAll(users, state);
  })
);

export function userReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}

// export const userReducer = {
//   initialize: (state: State): State => state,
//   retrieveUsersData: (state: State): State => {
//     return {
//       ...state,
//     };
//   },
//   retrieveUsersDataSuccess: (
//     state: State,
//     { payload }: UserPayloadType<{ users: UserResponse[] }>
//   ): State => {
//     return adapter.addMany([payload.users], state);
//   },
//   saveEdit: (
//     state: UserState,
//     { payload }: UserPayloadType<{ user: UserResponse }>
//   ): UserState => {
//     return {
//       ...state,
//     };
//   },
//   saveEditSuccess: (
//     state: UserState,
//     { payload }: UserPayloadType<{ user: UserResponse }>
//   ): UserState => {
//     return {
//       ...state,
//       users: state.users?.map((u) =>
//         u.id === payload.user.id ? payload.user : u
//       ),
//     };
//   },
// };
