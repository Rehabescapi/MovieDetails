import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { movieListContainer, outerCard } from './MovieListComponent.css'
import {MovieCardComponent} from 'components'

export default class MovieListComponent extends Component {
  render () {
    const {movies, handleClick} = this.props
    return (

      <div className={movieListContainer} >

        {/* PS - Can we consider changing the name each to something more descriptive, like movie? */}
        {(movies).map((movie, key) => {
          // this.props.handleClick(each.id)
          // PS - Can we make each of these a Link component (from react-router-dom) so that we don't need to define a click handler?
          return (
            <div className={outerCard} key = {key} onClick ={() => handleClick(movie.id)}>
              <MovieCardComponent key ={key} backdrop={movie.backdrop_path} poster={movie.poster_path}
                title={movie.title} />
            </div>
          )
        }
        )}
        <span className='stretch' />

      </div>

    )
  }
}

MovieListComponent.propTypes =
{
  handleClick: PropTypes.func.isRequired,
  movies: PropTypes.array,
  ListType: PropTypes.string
}
