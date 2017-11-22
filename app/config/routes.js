import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'


import {MainContainer, RowContainer} from '../containers'
import {PageNotFound} from '../components'

export default class Routes extends Component {


    render()
    {
        return 
        (<Router>
            
                <Switch >
                    <Route path ='/' Component= {MainContainer} />
                    <Route path ='/movie/:movieId' component ={DetailContainer}/>
                    <Route component={NotFoundContainer}/> 
                </Switch>
            

        </Router>)
    }
}