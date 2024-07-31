import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse } from '../models/user.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export type UserPayloadType<T extends Record<string, unknown>> =
  PayloadAction<T>;

export interface UserState {
  users: UserResponse[];
}

export interface State extends EntityState<UserResponse> {}

export const adapter: EntityAdapter<UserResponse> =
  createEntityAdapter<UserResponse>();

export const initialState: State = adapter.getInitialState({});

// export const slice = createSlice({
//   initialState: initialState,
//   name: 'users',
//   reducers: null,
// });

// export const { actions, reducer } = slice;
