/* eslint-disable */
import React, { Component } from 'react';
import App from './App.css';
import Header from './Header';
import Search from './Search';
import RecentMovies from './RecentMovies';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayRecent: true
		}
	}

	handleRecent = () => {
		this.setState({displayRecent: false});
	}

	render() {
		return (
			<div id='main'>
				<Header />
				<Search onclick={this.handleRecent} />
				{this.state.displayRecent ? <RecentMovies /> : null}
			</div>
		);
	}
};
