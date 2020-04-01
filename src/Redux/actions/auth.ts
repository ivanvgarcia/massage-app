import { Dispatch } from 'redux';
import { AuthActionTypes } from './types';
import { Auth, User } from '../../types';
import { setBearerToken } from '../../Utils/';
import api from '../../Config/api';

export interface LoadUserAction {
  type: AuthActionTypes.LoadUser;
  payload: Auth;
}

export interface UpdateUserAction {
  type: AuthActionTypes.UpdateUser;
  payload: User;
}

export interface LoginAction {
  type: AuthActionTypes.Login;
  payload: Auth;
}

export interface SignupAction {
  type: AuthActionTypes.Signup;
  payload: Auth;
}

export interface AuthErrorAction {
  type: AuthActionTypes.AuthError;
  payload: Error;
}

export const login = (data: object) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const response = await api.post('/auth/login', data);

    localStorage.setItem('token', response.data.token);

    setBearerToken(response.data.token);

    const auth: Auth = {
      token: response.data.token,
      isAuthenticated: true,
      user: response.data.user,
      redirectUri: response.data.url,
      loading: false,
    };

    dispatch<LoginAction>({
      type: AuthActionTypes.Login,
      payload: auth,
    });
  } catch (error) {
    dispatch<AuthErrorAction>({
      type: AuthActionTypes.AuthError,
      payload: error.response.data,
    });
  }
};

export const loadUser = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const response = await api.post('/auth/check');

    const auth: Auth = {
      token: localStorage.token,
      isAuthenticated: true,
      user: response.data.user,
      redirectUri: null,
      loading: false,
    };

    dispatch<LoadUserAction>({
      type: AuthActionTypes.LoadUser,
      payload: auth,
    });
  } catch (error) {
    dispatch<AuthErrorAction>({
      type: AuthActionTypes.AuthError,
      payload: error.response.data,
    });
  }
};
