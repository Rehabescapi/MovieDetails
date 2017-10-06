import React, { Component } from 'react'
import 'whatwg-fetch'
import MovieList from './MovieList'
import {getQuery} from '../config/constants'
var state = 'Adventure';

import PropTypes from 'prop-types'


export default class GenreList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieList: [],
      genreType : props.genreType,
      Title :props.Title,
      listType : props.listType
    }
    console.log(this.state.genreType)
  }
  
  componentWillMount () {
    fetch(getQuery(this.state.genreType))
.then((response) => response.json())
.then((data) => this.setState({'movieList': data.results}))
  }

  render () {
    var movies = this.state.movieList
    var ListType = this.state.listType
    if (!movies) {
      return null
    }

    return (
      <div id='list'>
        <h2>{this.state.Title} Movies</h2>
        <MovieList movies={movies} ListType={ListType}/>
      </div>
) }
}

GenreList.propTypes = {
  genreType : PropTypes.string.isRequired,
  Title : PropTypes.string.isRequired,
  listType : PropTypes.string.isRequired, 
}
