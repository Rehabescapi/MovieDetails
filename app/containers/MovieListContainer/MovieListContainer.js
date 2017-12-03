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
   console.log(props)
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
  
    
    var ListType = {}
   
    

    return (
  
        <div id='list'>
        {!this.props.movies &&
        <div> Loading... </div> }
        {this.props.movies &&
        <div>
            <h2>{this.props.Title} Movies</h2>
            <MovieListComponent movies={this.props.movies} listType={ListType} Title={this.props.Title} handleClick= {this.handleClick}/>
        </div>
        }
          </div>
          )
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
  console.log(state)
  
  return {
    movieList : state.movieList.movies,
    movies : state.movieList.movies,
    hasErrored: state.itemsHasErroed,
    isLoading: state.itemsIsLoading
  }
}




export default connect(
  mapStateToProps
)(MovieListContainer)