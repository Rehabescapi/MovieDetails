import React, { Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { DetailContainer, HomeContainer } from 'containers'
import { PageNotFound, HeaderComponent as Header } from 'components'

import * as actions from 'redux/modules/movieList'
import * as genreActions from 'redux/modules/genreList'

/* eslint-disable */


 class MainContainer extends Component {
	constructor(props) {
		super(props);
		const {dispatch} = props
		this.boundActionCreators = bindActionCreators(actions, genreActions, dispatch)
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(actions.initialList())
		dispatch(genreActions.initialGenre())
	}
	handleRecent = () => {
		this.setState({displayMovies: false});
	}
	
	render() {
		return (
			<div>
			 
			<div id='main'>
				
			 <Router>
				 <Fragment>
				 <Header />
                <Switch >
                    <Route exact path ='/' component= {HomeContainer} />
                    <Route path ='/movie/:movieId' component ={DetailContainer}/>
                    <Route component={PageNotFound}/> 
                </Switch>
				</Fragment>
			</Router>
			</div>
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