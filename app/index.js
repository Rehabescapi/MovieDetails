import React from 'react'
import ReactDOM from 'react-dom'
//import App from './src/App'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import { BrowserRouter } from 'react-router-dom'

import thunk from 'redux-thunk'
import Routes from './config/routes'
import App from './App'
const store =  createStore( compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f))



ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
   <App/>
   </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
