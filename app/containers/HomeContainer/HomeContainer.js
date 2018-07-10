import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

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

	componentDidUpdate()
	{
		const { dispatch, getState, apiNeeded } = this.props

		if(apiNeeded){
			dispatch(actions.clearApi())
			dispatch(actions.initialList(apiNeeded))
		}

	}

	render() {

		 // PS - Can we be more descriptive with variable names here? 'a' doesn't tell me what this actually is. Also, on line 46, if we call the parameter 'genre', it might be less confusing to see things like 'genre.id' instead of 'id.id'
		 let genres = Object.values(this.props.genreTypes)

		return (
			<div id='main'>
		<SearchContainer />

				<div className='innerContainer'>

					{this.props.isLoading
					? <div> Loading </div>
					:genres.map(( id)=>(
						<MovieListContainer key ={id.id}  id = {id.id} Title={id.title} listType={id.title} movieList = {id.movies}/>
					))}
				</div>
			</div>
		);
	}
};

HomeContainer.propTypes = {
	genreTypes : PropTypes.object.isRequired,

}

HomeContainer.contextTypes = {
	router : PropTypes.object.isRequired,
}



function mapStateToProps ( state ){

	return {
	  movieList : state.movieList.movies,
	  hasErrored: state.itemsHasErroed,
	  isLoading: state.genreList.isLoading,
	  genreTypes : state.genreList.genres,
	  apiNeeded : state.movieList.apiNeeded

	}
  }





export default connect(
	mapStateToProps
  )(HomeContainer)
