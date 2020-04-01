import api from '../Config/api';

export const setAuthToken = (token: string): void => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
};

export const setBearerToken = (token: string): void => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const isEmpty = (obj: object): boolean =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export default setAuthToken;
