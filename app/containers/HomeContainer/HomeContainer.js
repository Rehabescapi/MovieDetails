import React , {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';


import {MovieListContainer, SearchContainer} from 'containers'
/* eslint-disable */
import { HeaderComponent} from 'components'
import * as actions from 'redux/modules/movieList'
import * as genreActions from 'redux/modules/genreList'
import {getGenreList} from 'config/constants'

 class HomeContainer extends Component {
	constructor(props) {
		super(props);
		
		const {dispatch} = props
		this.boundActionCreators = bindActionCreators(actions,genreActions, dispatch)
		
    }
    

	componentDidMount()
	{
			
		console.log(this.props)
			 const { dispatch, getState } = this.props
			 dispatch(actions.initialList())
			 dispatch(genreActions.initialGenre())
			
			
	}

	handleRecent = () => {
		this.setState({displayMovies: true});
	}
	
	render() {
		
		return (
			<div id='main'>
			
				<div className='innerContainer'>
				{
					this.props.isLoading ?
					<div > LOADING </div>
					: this.props.GenreTypes.forEach(function(reference) {
			
					return (
					<MovieListContainer Title ={reference.Title} listType ={reference.Title}/>
					)
				})}
				<MovieListContainer Title='Action' listType='Action' />

				</div>
			</div>
		);
	}
};

HomeContainer.propTypes = {
	GenreTypes : PropTypes.object.isRequired,
	
}

HomeContainer.contextTypes = {
	router : PropTypes.object.isRequired,
}



function mapStateToProps ( state ){
	return {
	  movieList : state.movieList.movies,
	  hasErrored: state.itemsHasErroed,
	  isLoading: true,
	  GenreTypes : state.genreList.genres
	}
  }
  
  



export default connect(
	mapStateToProps
  )(HomeContainer)