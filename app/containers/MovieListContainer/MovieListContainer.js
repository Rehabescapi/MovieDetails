import React, { Component } from 'react'

import { MovieListComponent } from 'components'
import { getQuery } from '../../config/constants'

import {connect} from 'react-redux'

import PropTypes from 'prop-types'
import * as actions from 'redux/modules/movieList'




import { bindActionCreators } from 'redux';
import movieList from '../../redux/modules/movieList';

 class MovieListContainer extends Component {
  constructor (props) {
   super(props)


   let parsedMovies = []
    this.handleClick= this.handleClick.bind(this)
    const {dispatch} = props
		this.boundActionCreators = bindActionCreators(actions, dispatch)
  }
  
    componentDidMount() {
    
      }
    
  handleClick(movieId) {
    //console.log('wooo')
    console.log(movieId)
    //this.context.router.history.replace('/movie/'+ movieId)
  }

  render () {
    var  {movieList, id, movies} = this.props
    let parsedMovies = []
    movieList.forEach(element => {
      parsedMovies.push(movies[element])
    })
    

    return (
  
        <div id='list'>
        {!this.props.movies &&
        <div> Loading... </div> }
        {this.props.movies &&
        <div>
            <h2  onClick={() => console.log('woo')}>{this.props.Title} Movies</h2>
          <MovieListComponent movies={parsedMovies} listType={this.props.listType} Title={this.props.Title} handleClick= {this.handleClick}/>
          
        </div>
        }
          </div>
          )
  }
}

MovieListContainer.propTypes = {
  Title : PropTypes.string,
  listType : PropTypes.string.isRequired, 
  movies : PropTypes.object,
  movieList : PropTypes.array.isRequired,
  parsedMovies : PropTypes.array
}

MovieListContainer.contextTypes = {
  router : PropTypes.object.isRequired,
}

function mapStateToProps ( state ){
 
  return {
    movies : state.movieList.movies,
    hasErrored: state.itemsHasErroed,
    isLoading: state.itemsIsLoading,
    genreList: state.genreList.genres
  }
}

function mapDispatchToProps( state ) {
  //
}




export default connect(
  mapStateToProps
)(MovieListContainer)