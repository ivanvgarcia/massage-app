import { FetchResourceAction, LoadResourceAction } from './resource';
import {
  LoadUserAction,
  LoginAction,
  SignupAction,
  AuthErrorAction,
  UpdateUserAction,
} from './auth';

export enum AuthActionTypes {
  Login = 'LOGIN',
  Signup = 'SIGNUP',
  UpdateUser = 'UPDATE_USER',
  LoadUser = 'LOAD_USER',
  AuthError = 'AUTH_ERROR',
}

export enum ResourceActionTypes {
  FetchData = 'FETCH_DATA',
  LoadingData = 'LOADING_DATA',
}

export type Action =
  | LoadUserAction
  | UpdateUserAction
  | LoginAction
  | SignupAction
  | AuthErrorAction
  | FetchResourceAction
  | LoadResourceAction;
