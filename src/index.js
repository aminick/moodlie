import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import SC from 'soundcloud';
import store from './redux/stores';
import App from './App';
import './styles/main.scss';

SC.initialize({
  client_id: '1512fb9cbe8228095fe92c6503e3a071',
});

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
