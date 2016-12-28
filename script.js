(function(){
	"use strict";

	var Card = React.createClass({
		render() {
			imgSrc = 'https://image.tmdb.org/t/p/w500/';
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
		var card;

		handleSubmit: function(e) {
			e.preventDefault();
			var searchInput = this.refs.search.value;
			$.get('https://api.themoviedb.org/3/search/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&query=' + searchInput, (data) => {
				card = <Card poster={data.results[0].poster_path} title={data.results[0].title} overview={data.results[0].overview} />
			});
			searchInput = "";
		},

		render() {
			return (
				<form onSubmit={this.handleSubmit}>
					<input ref='search' />
					<button>Search</button>
				</form>
			);
		}
	});


	var MoviesInTheatres = React.createClass({
		var card;

		componentWillMount: function() {
			$.get('https://api.themoviedb.org/3/discover/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&with_release_type=2|3&region=US', (data) => {
				card = <Card poster={data.results[0].poster_path} title={data.results[0].title} overview={data.results[0].overview} />
			});
		},

		render() {
			return (
				<div id='slideshow'>
					<h3>In Theatres Now</h3>
					{card}
				</div>
			);
		}
	});


	var Main = React.createClass({
		getInitialState: function() {
			return {};
		},
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
