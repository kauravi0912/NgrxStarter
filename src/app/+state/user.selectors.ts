import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, State } from './user.slice';

export const selectUserState = createFeatureSelector<State>('users');

// export const selectUsers = createSelector(
//   selectUserState,
//   (users) => users.
// );

const { selectAll, selectEntities } = adapter.getSelectors();
// export const getError = createSelector(selectUserState, (state: State) => state.error);
// export const getLoaded = createSelector(selectUserState, (state: State) => state.loaded);
// export const getDetailsLoader = createSelector(selectUserState, (state: UserState) => state.getDetailsLoader);
// export const getSaving = createSelector(selectUserState, (state: UserState) => state.saving);
export const getAllUser = createSelector(selectUserState, (state: State) =>
  selectAll(state)
);
