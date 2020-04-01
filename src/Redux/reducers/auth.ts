import { Action, AuthActionTypes } from '../actions';
import { Auth } from '../../types';

const initialState: Auth = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: {
    id: 0,
    name: '',
    email: '',
    photo: '',
  },
  redirectUri: null,
  loading: true,
  members: [],
};

export const auth = (state: Auth = initialState, action: Action): Auth => {
  switch (action.type) {
    case AuthActionTypes.Login:
      return { ...state, ...action.payload };
    case AuthActionTypes.Signup:
      return action.payload;
    case AuthActionTypes.LoadUser:
      return { ...state, ...action.payload };
    case AuthActionTypes.UpdateUser:
      return { ...state, user: { ...action.payload, ...state } };
    case AuthActionTypes.AuthError:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: {
          id: 0,
          name: '',
          email: '',
          photo: '',
        },
        loading: false,
      };
    default:
      return state;
  }
};
