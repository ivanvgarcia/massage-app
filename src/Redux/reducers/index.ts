import { combineReducers } from 'redux';
import { auth } from './auth';
import { resource } from './resource';

export const reducers = combineReducers({
  auth,
  resource,
});
