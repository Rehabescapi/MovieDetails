/**

	Get RecentMovies array
	Show one recentmovie at a time

	Fix where search card displays
	Fix search component layout

**/


(function(){
	"use strict";

	// card class for each movie poster
	var Card = React.createClass({

		render() {
			var imgSrc = 'https://image.tmdb.org/t/p/w500/';

			// change to U.S. date string
			var movieYear = this.props.release.slice(0,5);
			var releaseDate = this.props.release.slice(5) + "-" + movieYear.slice(0,4);

			return (
				<div id='card'>
					<img src={imgSrc + this.props.poster} />
					<div id="content-align">
						<h4>{this.props.title}</h4>
						<p>Release Date: {releaseDate}</p>
						<p id="overview">{this.props.overview}</p>
					</div>
				</div>
			);
		}
	});

	// render search and form
	var Search = React.createClass({
		getInitialState: function() {
			return {
				movie: null
			}
		},

		handleSubmit: function(e) {
			e.preventDefault();
			var searchInput = this.refs.search.value;
			$.get('https://api.themoviedb.org/3/search/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&query=' + searchInput, (data) => {
				this.setState({movie: data.results[0]});
			});
			this.refs.search.value = "";
		},

		render() {
			return (
				<div id="search">
					<form onSubmit={this.handleSubmit}>
						<input ref='search' />
						<button>Search</button>
					</form>
					{this.state.movie &&
						<Card poster={this.state.movie.poster_path} title={this.state.movie.title} overview={this.state.movie.overview} release={this.state.movie.release_date} />
					}
				</div>
			);
		}
	});


	// class for recent movies
	var RecentMovies = React.createClass({

		getInitialState: function() {
			return {
				movieList: [],
				counter: 0
			};
		},

		// slideshow control functions
		Previous: function() {

			if (this.state.counter == 0) {
				this.setState({'counter': this.state.movieList.length - 1});
			} else {
				this.setState({'counter': this.state.counter -= 1});
			}

			/*
				render new Card
			*/
		},
		Next: function() {

			if (this.state.counter == this.state.movieList.length - 1) {
				this.setState({'counter': 0});
			} else {
				this.setState({'counter': this.state.counter += 1});
			}

			/*
				render new Card
			*/

		},

		componentWillMount: function() {
			$.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US&page=1', (data) => {
				this.setState({'movieList': data.results});

				//may need callback to retrieve async data to show only one Card

			});
		},

		render() {
			var movie = this.state.movieList[this.state.counter];
			if(!movie) {
				return null;
			}
			return (
				<div id='slideshow'>
					<Card poster={movie.poster_path} title={movie.title} overview={movie.overview} release={movie.release_date} />
					<SlideshowControls prevMovie={this.Previous} nextMovie={this.Next} />
				</div>
			)}
	});

	// recent movie slideshow controls
	var SlideshowControls = React.createClass({
		render() {
			return (
				<div id='controls'>
					<button onClick={this.props.prevMovie}>Previous Movie</button>
					<button onClick={this.props.nextMovie}>Next Movie</button>
				</div>
			)
		}
	});


	var Main = React.createClass({
		addCard: function(searchTitle) {
			this.setState({
				title: searchTitle
			});
		},
		render() {
			return (
				<div id='main'>
					<div id="title">
						<span className="glyphicon glyphicon-film"></span>
						<h1>Movie Search</h1>
					</div>
					<Search addCard={this.addCard} />
					<RecentMovies />
				</div>
			);
		}
	});


	ReactDOM.render(<Main />, document.getElementById('app'));
})();
