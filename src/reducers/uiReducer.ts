import produce from 'immer';
import AT from '~/constants/action-types';
import {
  uiReducerInitialState as initialState,
  UIReducerState,
} from './initialStates';

export type Actions = {
  type: 'SET_BTN';
  payload?: AT['SET_BTN'];
};

export default function reducer(
  state: UIReducerState = initialState,
  action: Actions,
): UIReducerState {
  const { type } = action;
  switch (type) {
    case 'SET_BTN': {
      const { payload } = action;
      return produce(state, (draft) => {
        draft.showBtn = payload;
      });
    }
  }
  return state;
}
