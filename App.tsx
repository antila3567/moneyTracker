import { Root } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/Navigation';
import configureStore from './src/redux/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Root>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </Root>
      </PersistGate>
    </Provider>
  );
};

export default App;
