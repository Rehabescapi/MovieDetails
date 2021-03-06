import React, { Component } from 'react'
import { MovieListComponent } from 'components'
//import { Link } from 'react-router-dom'


import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'redux/modules/movieList'

import { bindActionCreators } from 'redux'

class MovieListContainer extends Component {
  constructor (props) {
    super(props)

    
    const {dispatch} = props
    this.boundActionCreators = bindActionCreators(actions, dispatch)
  }

  componentDidMount () {

  }

  // PS - It seems to me like we don't need this function if we make each movie a Link component
 /* handleClick (movieId) {
    this.context.router.history.replace('/movie/' + movieId)
  }*/

  render () {
    const {movieList, movies, listType, Title} = this.props
    let parsedMovies = []
    movieList.forEach(element => {
      parsedMovies.push(movies[element])
    })

    // PS - I'm not sure why we need a component in this file. It seems to me like we can move all this logic into the MovieListComponent and leave this container to just have the redux functions.
    return (

      <div id='list'>
        {!movies &&
        <div> {'Loading...'} </div> }
        {movies &&
        <div>
          <h2>{Title} {'Movies'}</h2>
          {/* PS - We can use the spread operator here to make it easier to pass down props from the parent component */}
         
            <MovieListComponent parsedMovies={parsedMovies}   {...this.props} /*listType={listType} Title={Title}*//>
         
        </div>
        }
      </div>
    )
  }
}

MovieListContainer.propTypes = {
  Title: PropTypes.string,
  listType: PropTypes.string.isRequired,
  movies: PropTypes.object,
  movieList: PropTypes.array.isRequired,
  parsedMovies: PropTypes.array,
  dispatch: PropTypes.func
}

MovieListContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    movies: state.movieList.movies,
    hasErrored: state.movieList.hasErrored,
    isLoading: state.movieList.itemsIsLoading,
    genreList: state.genreList.genres

  }
}

export default connect(
  mapStateToProps
)(MovieListContainer)
