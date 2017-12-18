import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as style from './Search.css';

var toggle = false;
var bandaid = '';
class Search extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		console.log(props)
	}
	componentDidMount(props)
	{
		console.log(props)
		console.log(this.props)
	}
	handleChange(e) {
	this.props.handleChange(e.target.value)
	}

	handleSubmit(e) {
		//e.preventDefault()
		this.props.searchAndHandleResultText()
		
		
	}
	componentWillUpdate(nextProps, nextState){
		var {dispatch} = nextProps
		if(nextProps.success ){
			console.log(nextProps.success)
			nextProps.clearId()
			this.context.router.history.replace('/movie/'+ nextProps.success)
			
			
			
			
		}

	}
	
	render() {
		return (
			<span>
			<input id={style.searchInput} type="text" id="searchTitle" placeholder="Search Title" onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.searchText} />
			<button id={style.inputButton}
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
	searchAndHandleResultText : PropTypes.func.isRequired,
	successId : PropTypes.string
}
Search.contextTypes = {
	router : PropTypes.object.isRequired,
  }

export default Search;