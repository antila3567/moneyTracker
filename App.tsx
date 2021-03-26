import { Root } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/Navigation';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <Navigation />
      </Root>
    </Provider>
  );
};

export default App;
