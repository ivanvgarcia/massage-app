import { Dispatch } from 'redux';
import { ResourceActionTypes } from './types';
import { ResourceType } from '../../types';
import api from '../../Config/api';

export interface FetchResourceAction {
  type: ResourceActionTypes.FetchData;
  payload: { resource: string; data: ResourceType[] };
}

export interface LoadResourceAction {
  type: ResourceActionTypes.LoadingData;
}

export const isLoading = () => (dispatch: Dispatch): void => {
  dispatch<LoadResourceAction>({
    type: ResourceActionTypes.LoadingData,
  });
};

export const fetchData = (resource: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const response = await api.get(`/${resource}`);

    const data = {
      resource,
      data: response.data[resource],
    };

    dispatch<FetchResourceAction>({
      type: ResourceActionTypes.FetchData,
      payload: data,
    });
  } catch (error) {
    // dispatch<AuthErrorAction>({
    //   type: AuthActionTypes.AuthError,
    //   payload: error.response.data,
    // });
  }
};
