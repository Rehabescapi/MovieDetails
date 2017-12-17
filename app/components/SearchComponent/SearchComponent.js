import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Search.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
	this.props.handleChange(e.target.value)
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.searchAndHandleResultText()
	}

	render() {
		console.log(this.props)
		return (
			<span>
			<input type="text" id="searchTitle" placeholder="Search Title" onChange={this.handleChange}  value={this.searchText} />
			<button
			onClick={this.handleSubmit}>
			{'Duck'}
		  </button>
		  </span>
		)
	}
}

Search.PropTypes = {
	text : PropTypes.string.isRequired,
	handleChange : PropTypes.func.isRequired,
	searchAndHandleResultText : PropTypes.func.isRequired
}

export default Search;