import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { movieListContainer, outerCard } from './MovieListComponent.css'
import {MovieCardComponent} from 'components'

export default class MovieListComponent extends Component {
  render () {
    var {movies, handleClick} = this.props
    return (

      <div className={movieListContainer} >

        {(movies).map((each, key) => {
          // this.props.handleClick(each.id)
          return (
            <div className={outerCard} key = {key} onClick ={() => handleClick(each.id)}>
              <MovieCardComponent key ={key} backdrop={each.backdrop_path} poster={each.poster_path}
                title={each.title} />
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
