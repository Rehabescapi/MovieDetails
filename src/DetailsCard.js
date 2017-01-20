/* eslint-disable */
import Genre from './Genre';
import React from 'react';

var DetailsCard = React.createClass({
	render() {
		// change to U.S. date string
		var movieYear = this.props.release.slice(0,5);
		var releaseDate = this.props.release.slice(5) + "-" + movieYear.slice(0,4);

		//change runtime from total minutes to hours and minutes
		var totalRuntime = this.props.runtime;
		var hours = Math.floor(totalRuntime / 60);
		var minutes = totalRuntime % 60;

		var imgSrc = 'https://image.tmdb.org/t/p/w500/';

		return (
			<div id='card'>
				<div id="content">
					<img src={imgSrc + this.props.poster} alt="movie poster" />
					<div id="content-align">
						<h3>{this.props.title}</h3>
						<p>Release Date: {releaseDate}</p>
						<p>Rated: {this.props.rating}</p>
						<div>Genre: {this.props.genres.map(function(each, key) {
												return <Genre genre={each.name} key={key}/>;
												})}
						</div>
						<p>Runtime: {hours}h {minutes}m</p>
						<h4>Overview</h4>
						<p id="overview">{this.props.overview}</p>
					</div>
				</div>
				<div id="cast">
					<h4>Top Billed Cast</h4>
						{this.props.cast.map(function(each, key) {
							if (key < 5) {
								return (
									<div id="actorsStyle" key={key}>
										<div id="actors">
											<img id="actorPic" src={imgSrc + each.profile_path} alt={"picture of "+ each.name} />
										</div>
										<p>{each.name}</p>
										<p>{each.character}</p>
									</div>
								)
							}
						})}
				</div>
			</div>
		);
	}
});

export default DetailsCard;
