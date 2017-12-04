import React , {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';


import {MovieListContainer, SearchContainer} from 'containers'
/* eslint-disable */
import { HeaderComponent} from 'components'
import * as actions from 'redux/modules/movieList'
import {getGenreList} from 'config/constants'

 class HomeContainer extends Component {
	constructor(props) {
		super(props);
		
		const {dispatch} = props
		this.boundActionCreators = bindActionCreators(actions, dispatch)
		
    }
    

	componentDidMount()
	{
			
			 const { dispatch } = this.props
			 dispatch(actions.initialList())
			 dispatch(actions.genreList(getGenreList()))
	}

	handleRecent = () => {
		this.setState({displayMovies: true});
	}
	
	render() {
		return (
			<div id='main'>
			
				<div className='innerContainer'>
				
				<MovieListContainer Title='Action' listType='Action' />

				</div>
			</div>
		);
	}
};

HomeContainer.propTypes = {
	GenreTypes : PropTypes.array.isRequired,
	
}

HomeContainer.contextTypes = {
	router : PropTypes.object.isRequired,
}



function mapStateToProps ( state ){
	return {
	  movieList : state.movieList.movies,
	  hasErrored: state.itemsHasErroed,
	  isLoading: state.itemsIsLoading,
	  GenreTypes : state.movieList.genreState
	}
  }
  
  



export default connect(
	mapStateToProps
  )(HomeContainer)