import React, { Component } from 'react'
import { DetailComponent, CastComponent } from 'components'
import {SearchContainer} from 'containers'
import { getQuery } from '../../config/constants'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'redux/modules/detailList'

import { bindActionCreators } from 'redux';
class DetailContainer extends Component {
  constructor(props) 
  {
    super(props)
    
    const {dispatch} = props
    this.boundActionCreators = bindActionCreators(actions, dispatch)
  }
componentDidMount(){
  const {movieId, dispatch} = this.props
  //console.log(movie)
 
  dispatch(actions.fetchAndHandleDetail(this.props.match.params.movieId))
 
}

componentWillMount() {
  
  
}


  render () {
    const imgSrc = 'https://image.tmdb.org/t/p/w500'
    let {movie , detail} = this.props
    return (
     
      <span> 
         <SearchContainer/>
   {detail &&movie?//unpolished conditional
   <DetailComponent movie = {movie} detail = {detail}/>
   :<div>nada </div>
   }
   {this.props.detail?
   <CastComponent cast = {this.props.detail.cast}/>
  :<div> Loading </div>
  }
      </span>
    )
  }



  }


DetailContainer.contextTypes = {
  router : PropTypes.object.isRequired,
}

function mapStateToProps ( state , props) {
 var movieId = props.match.params.movieId
 
  return {
   movie : state.movieList.movies[movieId],
    hasErrored: state.movieList.hasErrored,
    isLoading: state.movieList.itemsIsLoading,
    detail : state.detailList.moviesdetail[movieId],
  //  background : state.movieList.movies[movieId].backdrop_path
  }
}

function mapDispatchToProps( state ) {
  //
}




export default connect(
  mapStateToProps
)(DetailContainer)