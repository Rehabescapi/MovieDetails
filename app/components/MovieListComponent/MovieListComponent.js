import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { movieListContainer, stretch} from './MovieListComponent.css'
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
    return (
        
            <div className={movieListContainer} >
         
            {movies.map((each, key) => {
              if(each.genre_ids.includes(12))
             {
              return (
              
                <MovieCardComponent onClick={() => this.props.handleClick(each.id)} key ={key} backdrop={each.backdrop_path} poster={each.poster_path} title={each.title}
                 overview={each.overview} release={each.release_date} key={key} />
              
               
              )}
            })}
            <span className="stretch"></span>
             
            </div>


)
  }
}


MovieListComponent.propTypes = 
{
  handleClick : PropTypes.func.isRequired,
  movies : PropTypes.array.isRequired 
}

