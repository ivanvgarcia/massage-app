import { Action, ResourceActionTypes } from '../actions';
import { Resource, Column } from '../../types';

const initialState: Resource = {
  name: '',
  data: [],
  columns: [],
  loading: true,
};

export const resource = (state: Resource = initialState, action: Action): Resource => {
  let titles: string[];
  let columns: Column[] = [];

  switch (action.type) {
    case ResourceActionTypes.FetchData:
      if (Array.isArray(action.payload.data)) {
        titles = Object.keys(action.payload.data[0]);
        columns = titles.map(column => ({
          title: column,
          dataIndex: column,
          key: column,
          ellipsis: true,
        }));
      }

      return {
        ...state,
        name: action.payload.resource,
        data: action.payload.data,
        columns,
        loading: false,
      };
    case ResourceActionTypes.LoadingData:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
