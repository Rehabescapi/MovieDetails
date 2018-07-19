import React, { Component } from 'react'

import PropTypes from 'prop-types'
import * as style from './Search.css'
import { debug } from 'util';

class SearchComponent extends Component {
  constructor (props) {
    super(props)
    //debugger
    console.log(props)
    // PS - We can use es6 arrow functions so that we don't need to explicitly bind 'this'
   
  }

  // PS - I'm not sure where the success prop is coming from - it looks like SearchContainer is passing in a prop called successId
 

  


  render () {
    let input
    return (
      <span>
      <form onSubmit={e => {
        e.preventDefault()
        this.props.submitSearch(input.value)}}>

        <input ref = {node => input = node} id={style.searchInput} type='text'
          placeholder='Search Title' 
          onChange={e  => {
              this.props.handleChange(e.target.value)} }
          value={this.searchText} />
        <button id={style.inputButton}>
          {'Search'}
        </button>
      </form>
      </span>
    )
  }
}

SearchComponent.propTypes = {
  text: PropTypes.string,
  searchWoo : PropTypes.func.isRequired,
  /*handleChange: PropTypes.func.isRequired,
  searchAndHandleResultText: PropTypes.func.isRequired,*/
  successId: PropTypes.string

}
SearchComponent.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SearchComponent
