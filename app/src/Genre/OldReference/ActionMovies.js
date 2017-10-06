import React, { Component } from 'react'
import 'whatwg-fetch'
import MovieList from './MovieList'
import {getQuery} from '../config/constants'
export default class RecentMovies extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movieList: [],
    }
  }

  componentWillMount () {
    fetch(getQuery('Action'))
.then((response) => response.json())
.then((data) => this.setState({'movieList': data.results}))
  }

  render () {
    var movies = this.state.movieList

    if (!movies) {
      return null
    }

    return (
<div id='list'>
<h2>Action Movies</h2>
<MovieList movies={movies} ListType='actionList'/>
</div>
) }
}
