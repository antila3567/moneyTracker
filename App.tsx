import React from 'react'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './src/redux/reducers'
import thunk from 'redux-thunk';
import Navigation from './src/Navigation'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
