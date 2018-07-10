import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { routerMiddleware } from 'react-router-redux'
import * as reducers from 'redux/modules'

import thunk from 'redux-thunk'

import App from './App'
import createHistory from 'history/createBrowserHistory'
const middleware = routerMiddleware(createHistory())
const store = createStore(combineReducers({...reducers}), compose(
  applyMiddleware(thunk, middleware),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
