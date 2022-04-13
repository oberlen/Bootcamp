import { createSelector } from 'reselect';
import { State } from '~/reducers';

//UI
const showBtn = (state: State) => state.ui.showBtn;

//helloMessage

const helloMessage = (state: State) =>state.hello.helloMessage;

///Exported Functions
export const getIsShowBtn = createSelector(showBtn, (isBtn) => isBtn);

export const getIsShowHelloMessage = createSelector(helloMessage, (hellomess) => hellomess);