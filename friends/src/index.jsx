import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers';
import loginReducer from './store/reducers/login';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { addTokenToLocalStorage } from './store/actions';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    friend: reducer,
    login: loginReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
