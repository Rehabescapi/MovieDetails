import React, { Component } from 'react'

import * as style from './Detailcomponent.css'
import PropTypes from 'prop-types'

class DetailsCard extends Component {
  render () {
    // PS - We should use consts here instead of vars
    var { poster_path, backdrop_path, title, overview } = this.props.movie
    var { release_date, rating, runtime, genre} = this.props.detail

    const imgSrc = 'https://image.tmdb.org/t/p/w1280'
    const pstSrc = 'https://image.tmdb.org/t/p/w342'
    let stylez = {}
    if (this.props.movie) {
      stylez = {
        backgroundImage: 'url(' + imgSrc + backdrop_path + ')'
      }
    }

    return (
      <div className={style.detailsCard} style={stylez}>
        <div id={style.content}>
          <img src={pstSrc + poster_path} alt='movie poster' />
          <div id={style.contentAlign}>
            {/* PS - We can use template strings here to make this easier to read/write */}
            <h3>{title + '( ' + release_date + ' )'}</h3>
            <p>{'Rated: '}{rating}</p>
            <ul id={style.genreList}>{'Genre: '} {(genre).map(element => {
              return <li key = {element.name}> {element.name} </li>
            })
            }

            </ul>
            {/* PS - We can use template strings here to make this easier to read/write */}
            <p>{'Runtime: '}{runtime.h}{'h '}{runtime.m}{'m'}</p>
            <p id={style.overview}>{overview}</p>
          </div>
        </div>
      </div>
    )
  }
}

DetailsCard.propTypes = {
  movie: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired,
  genre: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object

}

export default DetailsCard
