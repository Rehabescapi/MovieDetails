import React, { Component } from 'react'
import { MovieListComponent } from 'components'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'redux/modules/movieList'

import { bindActionCreators } from 'redux'

class MovieListContainer extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    const {dispatch} = props
    this.boundActionCreators = bindActionCreators(actions, dispatch)
  }

  componentDidMount () {

  }

  handleClick (movieId) {
    this.context.router.history.replace('/movie/' + movieId)
  }

  render () {
    var {movieList, movies} = this.props
    let parsedMovies = []
    movieList.forEach(element => {
      parsedMovies.push(movies[element])
    })

    return (

      <div id='list'>
        {!this.props.movies &&
        <div> {'Loading...'} </div> }
        {this.props.movies &&
        <div>
          <h2>{this.props.Title} {'Movies'}</h2>
          <MovieListComponent movies={parsedMovies} listType={this.props.listType} Title={this.props.Title}
            handleClick= {this.handleClick}/>

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
