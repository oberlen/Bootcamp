import { combineReducers } from 'redux';

import AT from '~/constants/action-types';
// import helloMessageReducer from './helloMessageReducer';

import uiReducer, { Actions as UIActions } from './uiReducer';
import helloMessageReducer, { Actions as HelloAction } from './helloMessageReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  hello:helloMessageReducer,
});

type FETCH_MiddlewareActions = {
  type: 'GET_OVERVIEW_ITEMS';
  payload?: AT['GET_OVERVIEW_ITEMS'];
};

export type State = ReturnType<typeof rootReducer>;
export type Action = UIActions | FETCH_MiddlewareActions|HelloAction;

export default rootReducer;
