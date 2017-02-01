import DetailsCard from './DetailsCard';
import 'whatwg-fetch';
import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieid: null,
			moviedetails: null,
			ratings: null
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		var searchInput = this.refs.search.value;

		//get id for movie details then get movie details
		fetch('https://api.themoviedb.org/3/search/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&query=' + searchInput)
			.then( (response) => response.json() )
			.then( (data) => this.setState({'movieid': data.results[0].id}) )
			.then( () => fetch('https://api.themoviedb.org/3/movie/'+ this.state.movieid +'?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US&append_to_response=credits,releases')
										.then( (response) => response.json() )
										.then( (data) => this.setState({moviedetails: data}) )
										.then( () => { for (var i = 0, j = this.state.moviedetails.releases.countries.length; i < j; i++) {
												if (this.state.moviedetails.releases.countries[i].iso_3166_1 === "US") {
													this.setState({ratings: this.state.moviedetails.releases.countries[i].certification})
												}
											}
										})
			)
		this.refs.search.value = "";
}

	render() {
		return (
			<div id="search">
				<form id="searchForm" onSubmit={this.handleSubmit}>
					<input ref='search' id="searchInput" />
					<button onClick={this.props.onclick} id="searchButton">Search</button>
				</form>
				{this.state.moviedetails &&
					<DetailsCard poster={this.state.moviedetails.poster_path} title={this.state.moviedetails.title} overview={this.state.moviedetails.overview} release={this.state.moviedetails.release_date} rating={this.state.ratings} runtime={this.state.moviedetails.runtime} genres={this.state.moviedetails.genres} cast={this.state.moviedetails.credits.cast} />
				}
			</div>
		);
	}
};
