import React, { Component } from 'react'
import { cardTitle, innerCard } from './MovieCardComponent.css'
import PropTypes from 'prop-types'

import {Link } from 'react-router-dom'
export default class MovieCardComponent extends Component {
  render () {
    const imgSrc = 'https://image.tmdb.org/t/p/w500/'

    const style = {
      backgroundImage: 'url(' + imgSrc + this.props.backdrop + ')'

    }
    
    const {title , movieId} = this.props
    return (

      <Link to={`/movie/${movieId}`} >
      <div className={innerCard} style={style} >
        <p className={cardTitle}>{title}</p>
      </div>
      </Link>

    )
  }
}
MovieCardComponent.propTypes = {
  movieId: PropTypes.number.isRequired,
  backdrop: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
