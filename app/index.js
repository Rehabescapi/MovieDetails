import React from 'react'
import ReactDOM from 'react-dom'
//import App from './src/App'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'


import thunk from 'redux-thunk'


const store =  createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f))



ReactDOM.render(
  <Provider store={store}>
    <div > {'Hello World'}</div>
  </Provider>,
  document.getElementById('root'),
);
