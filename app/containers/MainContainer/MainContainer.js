import React , {Component} from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter as Router, Redirect, Route, Switch ,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { RowContainer, DetailContainer, HomeContainer, SearchContainer} from 'containers'
import {PageNotFound, HeaderComponent} from 'components'


import * as actions from 'redux/modules/movieList'
import * as genreActions from 'redux/modules/genreList'


/* eslint-disable */

import {GetRoutes}  from 'config/constants'
 class MainContainer extends Component {
	constructor(props) {
		super(props);
		const {dispatch} = props
		
		this.boundActionCreators = bindActionCreators(actions, genreActions, dispatch)
		
	
	}

	componentDidMount() {
		const { dispatch, getState, apiNeeded } = this.props
		
		dispatch(actions.initialList())
		dispatch(genreActions.initialGenre())
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

function mapStateToProps ( state ){
   return {
	 isLoading : state.isLoading,
	
   }
 }



export default withRouter( connect(mapStateToProps) (MainContainer))