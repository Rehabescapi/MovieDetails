import React, { Component } from 'react'
import {title} from './header.css'

export default class Header extends Component {
  render () {
    return (
<div className={title}>
<a href=''>
<span className='glyphicon glyphicon-film' />
<h1>Movie Search</h1>
</a>
</div>
)
  }
}
