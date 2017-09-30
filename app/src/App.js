/* eslint-disable */
import React, { Component } from 'react';
import App from './App.css';
import Header from './components/header/Header';
import Search from './Search';
import * as Genre from './Genre/index'

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayMovies: true
		}
	}

	handleRecent = () => {
		this.setState({displayMovies: false});
	}

	render() {
		return (
			<div id='main'>
				<Header />
				<Search onclick={this.handleRecent} />
				{this.state.displayMovies ? <Genre.RecentMovies /> : null}
				
			</div>
		);
	}
};
