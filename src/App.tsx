/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { QueryClient, QueryClientProvider } from 'react-query'


import ThemeProvider, { Text } from './theme';
import Router from './router';
import { State } from './reducers';
import configureStore from './store';
import { getInitialReducerState } from './reducers/initialStates';

export function getPreloadedState(): Store<State> {
  const $state = configureStore(getInitialReducerState());
  return $state;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

const App = (): JSX.Element => {
  const store = useRef(getPreloadedState()).current;

  return (
    <SafeAreaView style={{ flex: 1 }}>      
    <QueryClientProvider client={queryClient}>
      <Provider {...{ store }}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
        </Provider>
        </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
