import React from 'react'
import ReactDOM from 'react-dom'
//import App from './src/App'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'


import thunk from 'redux-thunk'
import App from './App'

const store =  createStore( compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f))



ReactDOM.render(
  <Provider store={store}>
   <App/>
  </Provider>,
  document.getElementById('root'),
);
