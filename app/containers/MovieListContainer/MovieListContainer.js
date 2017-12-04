import React, { Component } from 'react'

import { MovieListComponent } from 'components'
import { getQuery } from '../../config/constants'

import {connect} from 'react-redux'

import PropTypes from 'prop-types'
import * as actions from 'redux/modules/movieList'




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
     console.log(this.props)

      /*movies.map((each, key) => {
        if(each.genre_ids.includes(12))
     */
    
       
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
 
  return {
    
    movies : state.movieList.movies,
    hasErrored: state.itemsHasErroed,
    isLoading: state.itemsIsLoading
  }
}

function mapDispatchToProps( state ) {
  //
}




export default connect(
  mapStateToProps
)(MovieListContainer)