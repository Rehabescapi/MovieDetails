import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Search.css';


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

			this.context.router.history.push('/movie/'+ nextProps.success)
			nextProps.clearId()
			this.context.router.history.go(1)
			this.setState()
			
		}

	}
	
	render() {
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
	searchAndHandleResultText : PropTypes.func.isRequired,
	successId : PropTypes.string
}
Search.contextTypes = {
	router : PropTypes.object.isRequired,
  }

export default Search;