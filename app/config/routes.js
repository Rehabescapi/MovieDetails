import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'


import {MainContainer, RowContainer, DetailContainer, HomeContainer} from 'containers'
import {PageNotFound} from 'components'

 const GetRoutes = () => (

        <Router>  
                <Switch >
                    <Route exact path ='/' component= {PageNotFound} />
                    <Route path ='/movie/:movieId' component ={DetailContainer}/>
                    <Route component={PageNotFound}/> 
                </Switch>
           

        </Router>
        
)
export default GetRoutes