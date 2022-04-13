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
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetcher = axiosInstance();

const storageHellohMiddleware: Middleware<
  unknown,
  State,
  ThunkDispatch<State, unknown, Action>
> = (store) => (next) => async (action: Action) => {
  next(action);
  const { dispatch, getState } = store;
  const { type, payload } = action;

  switch (type) {
    case 'GET_HELLO':
      try {
        let name = await AsyncStorage.getItem('@user');
        switch (name) {
          case null:
            await AsyncStorage.setItem('@user', 'welcome');
            name='welcome'
            break;
          case 'welcome':
            await AsyncStorage.setItem('@user', 'welcomeBack');
            name='welcomeBack'
            break;
          default:
            name='welcomeBack'
            break;
        }
        dispatch({ type: 'SET_HELLO', payload: name });
      } catch (err) {
        console.log(err);
      }

  }
};

export default storageHellohMiddleware;
