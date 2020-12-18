import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { productsReducers } from './store/reducers/productsReducers';
import Routes from './Routes';
import { cartReducers } from './store/reducers/cartReducers';

const rootReducers = combineReducers({
  products: productsReducers,
  cart: cartReducers,
});

const store = createStore(rootReducers);
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
