import React, { Component } from 'react';

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
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		if (e.key === 'Enter') {
			if (this.state.value === '') {
				return;
			}
			if (localStorage) {
				localStorage.setItem('movieName', this.state.value);
			}

			this.props.handleMovieName(this.state.value);
			this.props.history.push('/movie/movie');

			let input = document.querySelector('#searchTitle');
			input.value = '';

		}
	}

	render() {
		return (
			<input type="text" id="searchTitle" placeholder="Search Title" onChange={this.handleChange} onKeyPress={this.handleSubmit} value={this.state.input} />
		)
	}
}

export default Search;