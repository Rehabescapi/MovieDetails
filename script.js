(function(){
	"use strict";

	var Card = React.createClass({
		render() {
			var imgSrc = 'https://image.tmdb.org/t/p/w500/';
			return (
				<div id='card'>
					<img src={imgSrc + this.props.poster} />
					<h4>{this.props.title}</h4>
					<p>{this.props.overview}</p>
				</div>
			);
		}
	});


	var Search = React.createClass({
		getInitialState: function() {
			return {
				movie: {}
			}
		},

		handleSubmit: function(e) {
			e.preventDefault();
			var searchInput = this.refs.search.value;
			$.get('https://api.themoviedb.org/3/search/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&query=' + searchInput, (data) => {
				this.setState({movie: data.results[0]});
			});
		},

		render() {
			return (
				<div>
					<form onSubmit={this.handleSubmit}>
						<input ref='search' />
						<button>Search</button>
					</form>
					{this.state.movie &&
						<Card poster={this.state.movie.poster_path} title={this.state.movie.title} overview={this.state.movie.overview} />
					}
				</div>
			);
		}
	});


	var MoviesInTheatres = React.createClass({
		getInitialState: function() {
			return {
				movie: {}
			}
		},

		componentWillMount: function() {
			var card;
			$.get('https://api.themoviedb.org/3/discover/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&with_release_type=2|3&region=US', (data) => {
				this.setState({movie: data.results[0]});
			});
		},

		render() {
			return (
				<div id='slideshow'>
					<h3>In Theatres Now</h3>
					{this.state.movie &&
						<Card poster={this.state.movie.poster_path} title={this.state.movie.title} overview={this.state.movie.overview} />
					}
				</div>
			);
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
					<h1>Movie Search</h1>
					<Search addCard={this.addCard} />
					<MoviesInTheatres />
				</div>
			);
		}
	});


	ReactDOM.render(<Main />, document.getElementById('app'));
})();
