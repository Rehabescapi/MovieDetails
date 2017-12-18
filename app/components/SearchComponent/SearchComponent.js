import React, { Component } from 'react'

import PropTypes from 'prop-types'
import * as style from './Search.css'

class Search extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillUpdate (nextProps, nextState) {
    if (nextProps.success) {
      nextProps.clearId()
      this.context.router.history.replace('/movie/' + nextProps.success)
    }
  }
  handleChange (e) {
    this.props.handleChange(e.target.value)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.searchAndHandleResultText()
  }

  render () {
    return (
      <span>
        <input id={style.searchInput} type='text'
          placeholder='Search Title' onChange={this.handleChange} onSubmit={this.handleSubmit}
          value={this.searchText} />
        <button id={style.inputButton}
          onClick={this.handleSubmit}>
          {'Duck'}
        </button>
      </span>
    )
  }
}

Search.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchAndHandleResultText: PropTypes.func.isRequired,
  successId: PropTypes.string

}
Search.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Search
