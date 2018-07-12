import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { movieListContainer, outerCard } from './MovieListComponent.css'
import {MovieCardComponent} from 'components'

import { Link } from 'react-router-dom'
export default class MovieListComponent extends Component {
  render () {
    //debugger
    const {parsedMovies} = this.props
    return (

      <div className={movieListContainer} >

        {/* PS - Can we consider changing the name each to something more descriptive, like movie? */}
        {(parsedMovies).map((movie, key) => {
         
          
          return (
            <div className={outerCard} key = {key} >
            {/*todo collapse movie */}
              <MovieCardComponent key ={key}   movieId ={movie.id} backdrop={movie.backdrop_path} poster={movie.poster_path}
                title={movie.title} />
            </div>
          )
        }
        )}
       {/* <span className='stretch' />*/}

      </div>

    )
  }
}

MovieListComponent.propTypes =
{
  parsedMovies: PropTypes.array,
  ListType: PropTypes.string
}
