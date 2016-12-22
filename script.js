var Card = React.createClass({
	// image poster begin url: https://image.tmdb.org/t/p/w500/
	render: function() {
		return (
			<div>
			</div>
		);
	}
	
});


var Search = React.createClass({
	getInitialState: function() {
		return { title: "" };
	},
	
	componentDidMount: function() {
		$.get('https://api.themoviedb.org/3/search/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&query=' + this.state.title, function(data) {
			console.log(data);
		});
	},
	
	handleSubmit: function(e) {
		e.preventDefault();
		var search = this.refs.search;
		// add search card
		search.value = "";
	},
	
	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input ref="search" />
				<button>Search</button>
			</form>
		);
	}
});


var MoviesInTheatres = React.createClass({
	
	getInitialState: function() {
		return {};
	},
	
	componentDidMount: function() {
		var component = this;
		$.get('https://api.themoviedb.org/3/discover/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&with_release_type=2|3&region=US', function(data) {
			component.setState(data);
			console.log(data);
		});
	},
	
	render: function() {
		return (
			<div>
				<h3>In Theatres Now</h3>
			</div>
		);
	}
});


var Main = React.createClass({
	addCard: function(searchTitle) {
		this.setState();
	},
	render: function() {
		return (
			<div id='main'>
				<h1>Movie Search</h1>
				<Search addCard={this.addCard}/>
				<MoviesInTheatres />
			</div>
		);
	}
});


ReactDOM.render(<Main />, document.getElementById('app'));