import { createAction, props } from '@ngrx/store';
import { UserResponse } from '../models/user.model';

export const loadUsers = createAction('[Load Users] Load users');
export const loadUsersSuccess = createAction(
  '[Load Users success]',
  props<{ users: UserResponse[] }>()
);

export const updateMultiple = createAction(
  '[update multiple]',
  props<{ multipleUsers: UserResponse[] }>()
);
export const updateMultipleSuccess = createAction(
  '[update multiple success]',
  props<{ users: UserResponse[] }>()
);
