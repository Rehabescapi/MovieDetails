import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {carouselButtons, movieList} from './MovieListComponent.css'
import {MovieCardComponent} from 'components'

export default class MovieListComponent extends Component {
  constructor (props) {
    super(props)
    console.log('MovieList Component')
    console.log(props)
    this.state = {
      el: props.ListType,
    }
  }

 

  moveLeft = () => {
    const list = document.getElementById(this.state.el)
    var val = (parseInt(list.style.left, 10) || 0) + 300
    if (parseInt(list.style.left, 10) >= 0) {
      return
    } else {
      list.style.left = val + 'px'
    }
  }

  moveRight = () => {
    const list = document.getElementById(this.state.el)
    var val = (parseInt(list.style.left, 10) || 0) - 300
    if (parseInt(list.style.left, 10) <= -6500) {
      return
    } else {
      list.style.left = val + 'px'
    }
  }

  render () {
    var movies = this.props.movies

    var styleLeft = {
      left: '0px',
    }
    /*
    
    */
    return (
          <div>
            <div id={this.state.el} className={movieList} style={styleLeft}>
            <ul className={this.state.el}>
            {movies.map((each, key) => {
              return (
               
                <div onClick={() => this.props.handleClick(each.id)}>
                <MovieCardComponent key = {key} backdrop={each.backdrop_path} style={innerHeight = 50} poster={each.poster_path} title={each.title}
                 overview={each.overview} release={each.release_date} key={key} />
               </div>
      
              )})}



              </ul>
            </div>





            <div className={carouselButtons}>
              <button id={this.state.el + 'LeftButton'} onClick={this.moveLeft}>&#x3c;</button>
              <button onClick={this.moveRight}>&#x3e;</button>
            </div>
          </div>
)
  }
}


MovieListComponent.propTypes = 
{
  handleClick : PropTypes.func.isRequired,
  movies : PropTypes.array.isRequired 
}

