import {
  applyMiddleware,
  compose as reduxCompose,
  createStore,
  Middleware,
  Store,
  StoreEnhancer,
  PreloadedState,
} from 'redux';
import { useCallback } from 'react';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { useDispatch as _useDispatch } from 'react-redux';

import { fetchMiddleware } from '~/middlewares';
import rootReducer, { State, Action } from '~/reducers';
import storageHellohMiddleware from '~/middlewares/storageHello';

// If on __DEV__ will use redux-devtools-extension compose,
// otherwise it wll use default redux compose function.
function getCompose(): (
  x?: ReturnType<typeof applyMiddleware>,
) => StoreEnhancer {
  if (__DEV__) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension');

    return composeWithDevTools;
  }

  return reduxCompose;
}

/**
 * @name getMiddlewares
 * If on __DEV__ will some development middleware will be pushed,
 * otherwise it not push them and use defaults.
 */
function getMiddlewares(): Middleware<
  unknown,
  State,
  ThunkDispatch<State, unknown, Action>
>[] {
  const defaults = [thunkMiddleware, fetchMiddleware,storageHellohMiddleware];

  if (__DEV__) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
      collapsed: true,
      predicate: (_, { type }) => type !== undefined,
    });

    return [logger, ...defaults];
  }

  return defaults;
}

// preloadedState is the initial state.
// can be used to restore a previously serialized user session.
// If you use `combineReducers` to produce the root reducer function,
// this must be an object with the same shape as `combineReducers` keys.
function configureStore(preloadedState?: PreloadedState<State>): Store<State> {
  const middlewares = getMiddlewares();
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const compose = getCompose();
  const composedEnhancers = compose(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

export function useDispatch(): (event: Action) => void {
  const dispatch = _useDispatch();
  const fn = useCallback(
    (event: Action) => {
      dispatch(event);
    },
    [dispatch],
  );

  return fn;
}

export default configureStore;
