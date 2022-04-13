import produce from 'immer';
import AT from '~/constants/action-types';
import {
  IHelloMessageReducerState,
  // uiReducerInitialState as initialState,
  helloMessageReducerInitialState as initialState,
  UIReducerState,
} from './initialStates';

export type Actions = {
  type: 'SET_HELLO';
  payload?: AT['SET_HELLO'];
}|{
  type:'GET_HELLO',
  payload?:AT['GET_HELLO']
};

export default function reducer(
  state: IHelloMessageReducerState = initialState,
  action: Actions,
): IHelloMessageReducerState {
  const { type } = action;
  switch (type) {
    case 'SET_HELLO': {
      const { payload } = action;
      return produce(state, (draft) => {
        draft.helloMessage = payload;
      });
    }
  }
  return state;
}
