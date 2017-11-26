import React, { Component } from 'react'
import 'whatwg-fetch'
import { MovieListComponent } from 'components'
import { getQuery } from '../../config/constants'
var state = 'Adventure';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getGenreList } from 'redux/modules/movieList'
import { browserHistory } from 'react-router'
 class MovieListContainer extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = {
      movieList: [],
      Title :this.props.listType,
      listType : props.listType
    }

    this.handleClick= this.handleClick.bind(this)
    
  }
  
  componentDidMount () {
 
getGenreList(this.state.listType)
.then((data) => this.setState({'movieList': data.results}))
  }

  handleClick(movieId) {
    console.log('woo')
    this.context.router.history.replace('/movie/'+ movieId)
  }

  render () {
    var movies = this.state.movieList
    var ListType = this.state.listType
   
    if (!movies) {
      return null
    }

    return (
        <div id='list'>
        {!movies &&
        <div> Loading... </div> }
        {movies &&
        <div>
            <h2>{this.state.Title} Movies</h2>
            <MovieListComponent movies={movies} listType={ListType} Title={this.props.Title} handleClick= {this.handleClick}/>
        </div>
        }
          </div>
) }
}

MovieListContainer.propTypes = {
  Title : PropTypes.string,
  listType : PropTypes.string.isRequired, 
  movies : PropTypes.object,

}

MovieListContainer.contextTypes = {
  router : PropTypes.object.isRequired,
}

function mapStateToProps ( props ){
   
  const { movies, ListType, Title} = props
  return {
    movies,
    ListType,
    Title
  }
}


function mapDispatchToProps (){

}

export default connect(
  mapStateToProps
)(MovieListContainer)