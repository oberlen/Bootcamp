export interface UIReducerState {
  showBtn: boolean | undefined;
}

export interface IHelloMessageReducerState {
  helloMessage: string | null | undefined;
}

export const uiReducerInitialState: UIReducerState = {
  showBtn: true,
};

export const helloMessageReducerInitialState: IHelloMessageReducerState = {
  helloMessage: null,
};

type InitialState = {
  ui: UIReducerState;
  hello:IHelloMessageReducerState;
};
export function getInitialReducerState(): InitialState {
  const newState = {
    ui: uiReducerInitialState,
    hello:helloMessageReducerInitialState
  };

  return newState;
}
