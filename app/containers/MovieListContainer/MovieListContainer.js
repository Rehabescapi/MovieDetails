import React, { Component } from 'react'
import 'whatwg-fetch'
import { MovieListComponent } from 'components'
import { getQuery } from '../../config/constants'
var state = 'Adventure';
import {connect} from 'react-redux'

import PropTypes from 'prop-types'
import * as actions from 'redux/modules/movieList'

import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux';

 class MovieListContainer extends Component {
  constructor (props) {
   super(props)
    this.handleClick= this.handleClick.bind(this)
    const {dispatch} = props
		
		this.boundActionCreators = bindActionCreators(actions, dispatch)
	
  }
  
 
    componentDidMount() {
     
      const { dispatch } = this.props
      dispatch(actions.initialList())
    }
 
  

  handleClick(movieId) {
    
    this.context.router.history.replace('/movie/'+ movieId)
  }

  render () {
  
    var movies = {}
    var ListType = {}
   
    if (!movies) {
      return null
    }

    return (
      <div> 'woo '</div>
    )
    /*
        <div id='list'>
        {!movies &&
        <div> Loading... </div> }
        {movies &&
        <div>
            <h2>{this.state.Title} Movies</h2>
            <MovieListComponent movies={movies} listType={ListType} Title={this.props.Title} handleClick= {this.handleClick}/>
        </div>
        }
          </div>
 }*/
  }
}

MovieListContainer.propTypes = {
  Title : PropTypes.string,
  listType : PropTypes.string.isRequired, 
  movies : PropTypes.array,
 

}

MovieListContainer.contextTypes = {
  router : PropTypes.object.isRequired,
}

function mapStateToProps ( state ){
  
  
  return {
    movieList : state.movies,
    movies : state.movies,
    hasErrored: state.itemsHasErroed,
    isLoading: state.itemsIsLoading
  }
}




export default connect(
  mapStateToProps
)(MovieListContainer)