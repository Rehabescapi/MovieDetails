import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'


import { connect } from 'react-redux';

import { HeaderComponent as Header } from 'components'
import { MainContainer} from 'containers'

const App = () => (
  <div>
    <Header />
    <MainContainer />
  </div>
)

export default App