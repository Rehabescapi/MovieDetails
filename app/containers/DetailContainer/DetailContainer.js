import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DetailComponent, CastComponent } from 'components'

import {connect} from 'react-redux'
import * as actions from 'redux/modules/detailList'
import { bindActionCreators } from 'redux'




class DetailContainer extends Component {
  constructor (props) {
    super(props)

    const {dispatch} = props
    this.boundActionCreators = bindActionCreators(actions, dispatch)
  }
  componentDidMount () {
    const {dispatch} = this.props
    dispatch(actions.fetchAndHandleDetail(this.props.match.params.movieId))
  }

  componentWillReceiveProps (nextProps) {
    // Solves an issue if container is called from an existing detail component
    const { dispatch } = this.props
    if (nextProps.history.action === 'REPLACE' && !nextProps.detail) {
      dispatch(actions.fetchAndHandleDetail(nextProps.match.params.movieId))
    }
  }

  render () {
    // const imgSrc = 'https://image.tmdb.org/t/p/w500'
    let {movie, detail} = this.props

    return (
      <span>
       {/* <SearchContainer/>*/}
        {detail && movie// unpolished conditional
          ? <DetailComponent movie = {movie} detail = {detail}/>
          : <div> {'nada'} </div>
        }
        {this.props.detail
          ? <CastComponent cast = {this.props.detail.cast}/>
          : <div> {'Loading'} </div>
        }
      </span>
    )
  }
}

DetailContainer.contextTypes = {
  router: PropTypes.object.isRequired
}
DetailContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  movie: PropTypes.object,
  detail: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state, props) {
  var movieId = props.match.params.movieId
  return {
    movie: state.movieList.movies[movieId],
    hasErrored: state.movieList.hasErrored,
    isLoading: state.movieList.itemsIsLoading,
    detail: state.detailList.moviesdetail[movieId]
  //  background : state.movieList.movies[movieId].backdrop_path
  }
}

export default connect(
  mapStateToProps
)(DetailContainer)
