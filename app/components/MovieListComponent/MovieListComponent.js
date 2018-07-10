import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { movieListContainer, outerCard } from './MovieListComponent.css'
import {MovieCardComponent} from 'components'

export default class MovieListComponent extends Component {
  render () {
    // PS - I think we should use lets and consts more consistently and phase out the use of vars
    var {movies, handleClick} = this.props
    return (

      <div className={movieListContainer} >

        {/* PS - Can we consider changing the name each to something more descriptive, like movie? */}
        {(movies).map((each, key) => {
          // this.props.handleClick(each.id)
          // PS - Can we make each of these a Link component (from react-router-dom) so that we don't need to define a click handler?
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
