(function(){
	"use strict";
	
	var actions = {
		Previous: function(){
			if (this.state.currMovie == 0) {
				this.state.currMovie = this.state.movieList.length - 1;
			}
			
			this.state.currMovie--;
			
		},
		Next: function(){
			if (this.state.currMovie == this.state.movieList.length - 1) {
				this.state.currMovie = 0;
			}
			
			this.state.currMovie++;
			
		}
	};

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

	// render search form
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
		Previous: function() {
			actions.Previous();
		},
		Next: function() {
			actions.Next();
		},
		
		getInitialState: function() {
			return {
				movieList: [],
				currMovie: 0
			}
		},

		componentDidMount: function() {
			$.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US&page=1', (data) => {
				this.setState({movieList: data.results});
			});
		},

		render() {
			return (
				<div id='slideshow'>
					<h3>Recent New Movies</h3>
					<SlideshowControls currMovie={this.state.movieList[0]} prevMovie={this.Previous} nextMovie={this.Next} />
					{this.state.movieList.map(function(eachMovie, key) {
						return (
							<Card poster={eachMovie.poster_path} title={eachMovie.title} overview={eachMovie.overview} release={eachMovie.release_date} key={key}/>
						)
					})}
				</div>
			)}
	});
	
	// recent movie slideshow controls
	var SlideshowControls = React.createClass({
		render() {
			return (
				<div id='controls'>
					<button onClick={this.props.prevMovie}>Previous Poster</button>
					<button onClick={this.props.nextMovie}>Next Poster</button>
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
