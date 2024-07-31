import { Injectable } from '@angular/core';
import * as userState from '../+state/user.slice';
import * as userSelectors from '../+state/user.selectors';
import { Store } from '@ngrx/store';
import { UserResponse } from '../models/user.model';
import { loadUsers, updateMultiple } from '../+state/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserFacadeService {
  users$ = this.store.select(userSelectors.getAllUser);

  constructor(private store: Store<userState.State>) {}

  setUsers(): void {
    this.store.dispatch(loadUsers());
  }

  saveUser(userInfo: UserResponse): void {
    // this.store.dispatch(userState.actions.saveEdit({ user: userInfo }));
  }

  saveUsersData(userinfo: UserResponse[]): void {
    this.store.dispatch(updateMultiple({ multipleUsers: userinfo }));
  }
}
