import React, { Component } from 'react'

import * as style from './Detailcomponent.css'
import PropTypes from 'prop-types'


 class DetailsCard extends Component {
  constructor (props) {
    super(props)
    console.log('WoOOOO')
    
  }

    render () {
       var {poster_path, releaseDate, title, ratings, genre_ids ,overview } = this.props.movie
      const imgSrc = 'https://image.tmdb.org/t/p/w500'
      return (
        <div id='detailsCard'>
          <div id='content'>
            <img src={imgSrc + poster_path} alt='movie poster' />
            <div id='content-align'>
              <h3>{title}</h3>
              <p>{'Release Date: '}{releaseDate}</p>
              <p>{'Rated: '}{ratings}</p>
              <div>{'Genre: '}
              </div>
              <p>{'Runtime: '}{}{'h '}{}{'m'}</p>
              <h4>{'Overview'}</h4>
              <p id='overview'>{overview}</p>
              </div>
        </div>
    </div>
)
  }}




  
export default DetailsCard
