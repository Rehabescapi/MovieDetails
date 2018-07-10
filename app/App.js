import React from 'react'
// PS - In general throughout this app, we can name component files the same as the components they export, so that they don't need to get renamed when importing
import { HeaderComponent as Header } from 'components'
import { MainContainer} from 'containers'
import { Router } from 'react-router-dom'
const App = () => (
  <div>
    
   
    <MainContainer />
   
  </div>
)

export default App
