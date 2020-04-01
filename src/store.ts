import { createStore, Store, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './Redux/reducers/';
import { ReduxStore } from './types';

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const store: Store<ReduxStore, any> = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
