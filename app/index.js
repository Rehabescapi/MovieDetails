import React from 'react'
import ReactDOM from 'react-dom'
//import App from './src/App'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducers from 'redux/modules'
import listReducer from 'redux/modules/movieList'
import loadingList from 'redux/modules/loadingList'
import thunk from 'redux-thunk'

console.log(listReducer)
import App from './App'
import createHistory from 'history/createBrowserHistory'

const store =  createStore( combineReducers({...reducers}), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f))
  const middleware = routerMiddleware(createHistory())


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
   <App/>
   </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
