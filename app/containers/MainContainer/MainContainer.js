import React , {Component} from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { RowContainer, DetailContainer, HomeContainer} from 'containers'
import {PageNotFound, HeaderComponent} from 'components'
import * as actions from 'redux/modules/loadingList'



/* eslint-disable */

import {GetRoutes}  from 'config/constants'
 class MainContainer extends Component {
	constructor(props) {
		super(props);
		const {dispatch} = props
		
		this.boundActionCreators = bindActionCreators(actions, dispatch)
		console.log(this.boundActionCreators)		
	
	}

	componentDidMount() {
	
		const { dispatch } = this.props
		dispatch(actions.updateDispathcer())
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



export default connect(mapStateToProps) (MainContainer)