import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import boardReducer from './store/board/reducers';
import App from './components/App';

ReactDOM.render(
  <Provider store={createStore(boardReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
