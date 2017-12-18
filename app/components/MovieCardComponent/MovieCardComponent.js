import React, { Component } from 'react'
import { cardTitle, innerCard } from './MovieCardComponent.css'
import PropTypes from 'prop-types'
export default class MovieCardComponent extends Component {
  render () {
    const imgSrc = 'https://image.tmdb.org/t/p/w500/'

    const style = {
      backgroundImage: 'url(' + imgSrc + this.props.backdrop + ')'

    }

    return (

      <div className={innerCard} style={style} >
        <p className={cardTitle}>{this.props.title}</p>
      </div>

    )
  }
}
MovieCardComponent.propTypes = {
  movie: PropTypes.string.isRequired,
  backdrop: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
