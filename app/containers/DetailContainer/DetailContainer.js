import React, { Component } from 'react'
import { DetailComponent, CastComponent } from 'components'
import { getQuery } from '../../config/constants'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'redux/modules/movieList'

import { bindActionCreators } from 'redux';
class DetailContainer extends Component {
  constructor(props) 
  {
    super(props)

    console.log(this.props.match.params.movieId)
  }
componentDidMount(){

}



  render () {
    console.log(this.props)
    return (

      <div> <h2> Detail Container </h2>
      
   {this.props.movie?
   <DetailComponent movie = {this.props.movie}/>
   :<div>nada </div>
   }
      </div>
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

  }
}

function mapDispatchToProps( state ) {
  //
}




export default connect(
  mapStateToProps
)(DetailContainer)