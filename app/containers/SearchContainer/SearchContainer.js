import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Search } from 'components'
import { connect } from 'react-redux'
import * as searchActionCreators from 'redux/modules/search'

import { withRouter } from 'react-router-dom'

class SearchContainer extends Component {
  render () {
    return (<Search searchText={this.props.searchText} successId = {this.props.success}/>

    )
  }
}

function mapStateToProps ({search}) {
  return {
    searchText: search.queryText,
    success: search.successId
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({...searchActionCreators}, dispatch)
}

SearchContainer.propTypes = {
  searchText: PropTypes.string,
  success: PropTypes.int,
  successId: PropTypes.int
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer))
