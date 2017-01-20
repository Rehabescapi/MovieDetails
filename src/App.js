/* eslint-disable */
import React from 'react';
import App from './App.css';
import Header from './Header';
import Search from './Search';
import RecentMovies from './RecentMovies';

var Main = React.createClass({
		getInitialState: function(){
			return {
				displayRecent: true
			}
		},
		handleRecent: function() {
			this.setState({displayRecent: false});
		},
		render() {
			return (
				<div id='main'>
          <Header />
					<Search onclick={this.handleRecent} />
					{this.state.displayRecent ? <RecentMovies /> : null}
				</div>
			);
		}
	});

export default Main;
