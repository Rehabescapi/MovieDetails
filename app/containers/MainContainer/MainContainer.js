import React , {Component} from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'


import { RowContainer, DetailContainer, HomeContainer} from 'containers'
import {PageNotFound, HeaderComponent} from 'components'


/* eslint-disable */

import {GetRoutes}  from 'config/constants'
 class MainContainer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			displayMovies: true
		}
	}

	handleRecent = () => {
		this.setState({displayMovies: false});
	}
	
	render() {
		return (
			<div id='main'>
			
			<Router>  
                <Switch >
                    <Route exact path ='/' component= {HomeContainer} />
                    <Route path ='/movie/:movieId' component ={DetailContainer}/>
                    <Route component={PageNotFound}/> 
                </Switch>
           

        </Router>
			</div>
		);
	}
};

MainContainer.propTypes = {
	
}

MainContainer.contextTypes = {
	router : PropTypes.object.isRequired,
}

export default MainContainer