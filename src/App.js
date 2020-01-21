import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Tasks from './container/Tasks';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Tasks></Tasks>
      </div>
    </Provider>
  );
}

export default App;
