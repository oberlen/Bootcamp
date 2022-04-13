import { AccessibilityInfo } from 'react-native';
import {
  isNull,
  join,
  map,
  get,
  getOr,
  toNumber,
  isNaN,
  isEmpty,
  findIndex,
  isNil,
  isUndefined,
} from 'lodash/fp';
import { Middleware } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import axiosInstance from '~/utils/network';
import { Action, State } from '~/reducers';

const fetcher = axiosInstance();

const fetchMiddleware: Middleware<
  unknown,
  State,
  ThunkDispatch<State, unknown, Action>
> = (store) => (next) => async (action: Action) => {
  next(action);
  const { dispatch, getState } = store;
  const { type, payload } = action;

 
  
};

export default fetchMiddleware;
