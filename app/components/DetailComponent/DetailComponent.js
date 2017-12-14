import React, { Component } from 'react'

import * as style from './Detailcomponent.css'
import PropTypes from 'prop-types'


 class DetailsCard extends Component {
  constructor (props) {
    super(props)
    console.log(this.props.detail)
    
  }

    render () {
       var {poster_path, backdrop_path,  title, genre_ids ,overview } = this.props.movie
       var {release_date , cast, rating, runtime, genre} = this.props.detail
       console.log(genre)
       const imgSrc = 'https://image.tmdb.org/t/p/w1280'
       const pstSrc ='https://image.tmdb.org/t/p/w342'
       let stylez = {}
       if(this.props.movie){
         stylez = {
           backgroundImage : 'url(' + imgSrc + backdrop_path + ')'
       }}
      console.log(genre)
      return (
        <div id={style.detailsCard} style={stylez}>
          <div id={style.content}>
            <img src={pstSrc + poster_path} alt='movie poster' />
            <div id={style.contentAlign}>
              <h3>{title + '( ' + release_date + ' )'}</h3>
              <p>{'Rated: '}{rating}</p>
              <ul id={style.genreList}>{'Genre: '} {(genre).map(element => {
              
              return <li> {element.name} </li>
              }) 
              }
        
              </ul>
              <p>{'Runtime: '}{runtime.h}{'h '}{runtime.m}{'m'}</p>
              <p id={style.overview}>{overview}</p>
              </div>
        </div>
    </div>
)
  }}

function GenreDetails ({ genre }){

    return   <div className = {style.genrecard}> {genre.name} </div>
  
}


  
export default DetailsCard
