import React , {Component} from 'react'
import PropTypes, { object } from 'prop-types'
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
			
			 const { dispatch, getState } = this.props
			 dispatch(actions.initialList())
			 dispatch(genreActions.initialGenre())
			
			
	}

	render() {
		
		 let a = Object.values(this.props.genreTypes)
		
		/* console.log(this.props.isLoading)
		a.map((id)=> {console.log(id)
					console.log(id.movies)
				})
		 
 this.props.isLoading ?
					  <div > LOADING </div>
					:  {this.props.genreTypes.map((value)=> (
					<MovieListContainer Title={'value.title'} listType={'value.title'}/>
					))}

				)}

		 */
		return (
			<div id='main'>
			
				<div className='innerContainer'>
				
					{this.props.isLoading
					? <div> Loading </div>
					:a.map(( id)=>(
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
	  
	}
  }
  
  



export default connect(
	mapStateToProps
  )(HomeContainer)