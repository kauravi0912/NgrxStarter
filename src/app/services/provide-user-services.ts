import { EnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { newReducer, userReducer } from '../+state/user.reducers';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from '../+state/user.effects';
import * as userState from '../+state/user.slice';

export const provideUserServices = (): EnvironmentProviders[] => {
  return [provideState('users', userReducer), provideEffects([UserEffects])];
};
