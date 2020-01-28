import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import boardReducer from './store/board/reducers';

import App from './components/App';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <Provider store={createStore(boardReducer)}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
