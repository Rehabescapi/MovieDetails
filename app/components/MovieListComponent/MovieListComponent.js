import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { movieListContainer, stretch, outerCard} from './MovieListComponent.css'
import {MovieCardComponent} from 'components'

export default class MovieListComponent extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      el: props.ListType,
    }
  }

 
/*
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
  }*/
  componentDidMount() {
   
  }

  render () {
    var {movies, handleClick} = this.props
    return (
        
            <div className={movieListContainer} >
         
            {(movies).map((each, key) => {
              console.log(each.id)
              //this.props.handleClick(each.id)
              return (
              <div className={outerCard} onClick ={() => handleClick(each.id)}>
                <MovieCardComponent  key ={key} backdrop={each.backdrop_path} poster={each.poster_path} title={each.title} />
               </div>
              )}
            )}
            <span className="stretch"></span>
             
            </div>


)
  }
}


MovieListComponent.propTypes = 
{
  handleClick : PropTypes.func.isRequired,
  movies : PropTypes.array 
}

