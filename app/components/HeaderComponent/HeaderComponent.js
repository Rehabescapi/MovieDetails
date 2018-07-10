import React, { Component } from 'react'
import {title} from './header.css'

// PS - In general, as React apps grow, I've found that it makes it easier to name the file the same as the component that's getting exported.
// It helps with importing, but it also makes it clearer which file to look in when searching for a component.
export default class HeaderComponent extends Component {
  render () {
    return (
      <div className={title}>
        <a href='/'>
          <span className='glyphicon glyphicon-film' />
          <h1>{'Movie Search'}</h1>
        </a>
      </div>
    )
  }
}
