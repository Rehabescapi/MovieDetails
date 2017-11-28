import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { HeaderComponent as Header } from 'components'
import { MainContainer} from 'containers'

const App = () => (
  <div>
    <Header />
    <MainContainer />
  </div>
)

export default App