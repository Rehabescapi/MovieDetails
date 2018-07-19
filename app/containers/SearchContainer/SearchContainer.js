import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { SearchComponent } from 'components'
import { connect } from 'react-redux'
import * as searchAction from 'redux/modules/search'

import { withRouter } from 'react-router-dom'

class SearchContainer extends Component {
  // PS - Like MovieListContainer, this doesn't seem like it needs to be a component

  componentWillUpdate (nextProps) {
    if (nextProps.success) {
      nextProps.clearId()
      this.context.router.history.replace('/movie/' + nextProps.success)
    }
  }
 handleChange(){
  return null
}

  
}

function mapStateToProps ({search}) {
 
  return {
    searchText: search.queryText,
    successId: search.successId,
    success: search.success
  }
}

const mapDispatchToProps =dispatch => {
  //console.log(...searchActionCreators)
  return {
   // handleChange: (text) => dispatch(searchAction.handleChange(text)),
   handleChange : text => { dispatch(searchAction.handleChange(text))},
    submitSearch : () => { dispatch (searchAction.searchAndHandleResultText())}
   
  }
  //return bindActionCreators({...searchAction}, dispatch)
}

SearchContainer.propTypes = {
  searchText: PropTypes.string,
  success: PropTypes.int,
  successId: PropTypes.int
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent))
