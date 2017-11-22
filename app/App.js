import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { connect } from 'react-redux';
import {Routes} from './config/routes'


class App extends Component {
    render (){ 
        return (
          <Routes/>
        )
    }
}

export default App;
