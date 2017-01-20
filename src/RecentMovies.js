/* eslint-disable */
import SlideshowControls from './SlideshowControls';
import RecentCard from './RecentCard';
import 'whatwg-fetch';
import React from 'react';

var timer;

var RecentMovies = React.createClass({
	getInitialState: function() {
		return {
			movieList: [],
			counter: 0
		};
	},

	// slideshow control functions
	Previous: function() {
		if (timer) {
			clearTimeout(timer);
		}

		if (this.state.counter === 0) {
			this.setState({'counter': this.state.movieList.length - 1});
		} else {
			this.setState({'counter': this.state.counter -= 1});
		}
	},
	Next: function() {
		if (timer) {
			clearTimeout(timer);
		}

		if (this.state.counter === this.state.movieList.length - 1) {
			this.setState({'counter': 0});
		} else {
			this.setState({'counter': this.state.counter += 1});
		}
	},

	componentDidMount: function() {
		fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US&page=1')
			.then( (response) => response.json() )
			.then( (data) => this.setState({'movieList': data.results}) );
	},

	render() {
		var movie = this.state.movieList[this.state.counter];

		if(!movie) {
			return null;
		}

		timer = setTimeout(function() {
			this.Next();
		}.bind(this), 5000);

		return (
			<div id='slideshow'>
				<h2>Recent Movies</h2>
				<RecentCard poster={movie.poster_path} title={movie.title} overview={movie.overview} release={movie.release_date} />
				<SlideshowControls prevMovie={this.Previous} nextMovie={this.Next} />
			</div>
		)}
});

export default RecentMovies;
