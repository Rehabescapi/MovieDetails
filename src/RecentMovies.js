/* eslint-disable */
import RecentCard from './RecentCard';
import 'whatwg-fetch';
import React, { Component } from 'react';

export default class RecentMovies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieList: []
		}
	}

	componentWillMount() {
		fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US&page=1')
			.then( (response) => response.json() )
			.then( (data) => this.setState({'movieList': data.results}) );
	}

	render() {
		var movie = this.state.movieList;

		if(!movie) {
			return null;
		}

		return (
			<div id='recent'>
				<h2>Recent Movies</h2>
				{movie.map( (each, key) => {
					return (
						<RecentCard poster={each.poster_path} title={each.title} overview={each.overview} release={each.release_date} key={key} />
					)
				})}
			</div>
		)}
};
