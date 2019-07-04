import React from 'react';
import './App.css';
import { numbersApp } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import NumberFromHandler from './NumberFromHandler';

const store = createStore(numbersApp);
function App() {
  return (
    <Provider store={store}>
      <NumberFromHandler />
    </Provider>
  );
}

export default App;
