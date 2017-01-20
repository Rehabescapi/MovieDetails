import React from 'react';

var RecentCard = React.createClass({
	handleClick: function() {
		var title = this.props.title;
		var searchInput = document.getElementById('searchInput');
		searchInput.value = title;
		document.getElementById('searchButton').click();
	},

	render() {
		var imgSrc = 'https://image.tmdb.org/t/p/w500/';

		// change to U.S. date string
		var movieYear = this.props.release.slice(0,5);
		var releaseDate = this.props.release.slice(5) + "-" + movieYear.slice(0,4);

		return (
			<div id='card'>
				<div id="content">
					<img src={imgSrc + this.props.poster} alt="movie poster"/>
					<div id="content-align">
						<h3>{this.props.title}</h3>
						<p>Release Date: {releaseDate}</p>
						<p id="overview">{this.props.overview}</p>
						<a id="showMore" onClick={this.handleClick}>Show More</a>
					</div>
				</div>
			</div>
		);
	}
});

export default RecentCard;
