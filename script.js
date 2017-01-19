(function(){
	"use strict";
	var timer;
	
	var Header = React.createClass({
		render() {
			return (
				<div id='title'>
					<a href=''>
						<span className="glyphicon glyphicon-film"></span>
						<h1>Movie Search</h1>
					</a>
				</div>
			);
		}
	});
	
	
	// card class for each movie poster
	var RecentCard = React.createClass({
		handleClick: function() {
			var title = this.props.title;
			var searchInput = document.getElementById('searchInput');
			searchInput.value = title;
			$('#searchButton').click();
		},
		
		render() {
			var imgSrc = 'https://image.tmdb.org/t/p/w500/';
			
			// change to U.S. date string
			var movieYear = this.props.release.slice(0,5);
			var releaseDate = this.props.release.slice(5) + "-" + movieYear.slice(0,4);
			
			return (
				<div id='card'>
					<div id="content">
						<img src={imgSrc + this.props.poster} />
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
	
	
// card class for movie details
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
						<img src={imgSrc + this.props.poster} />
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
								if (key < 6) {
									return (
										<div id="actorsStyle" key={key}>
											<div id="actors">
												<img id="actorPic" src={imgSrc + each.profile_path} />
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
	

	var Genre = React.createClass({
		render() {
			return (
				<p className="genre">{this.props.genre}</p>
			)
		}
	});
	

	// create form
	var Search = React.createClass({
		getInitialState: function() {
			return {
				movieid: null,
				moviedetails: null,
				ratings: null
			}
		},
		
		handleSubmit: function(e) {
			e.preventDefault();
			var searchInput = this.refs.search.value;
			if (searchInput == "") {
				return
			}
			
			//get id for movie details
			$.get('https://api.themoviedb.org/3/search/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&query=' + searchInput, (data) => {
				this.setState({movieid: data.results[0].id});
				
				// get movie details
				$.get('https://api.themoviedb.org/3/movie/'+ this.state.movieid +'?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US&append_to_response=credits,releases', (details) => {
					this.setState({moviedetails: details});
					for (var i = 0, j = this.state.moviedetails.releases.countries.length; i < j; i++) {
						if (this.state.moviedetails.releases.countries[i].iso_3166_1 == "US") {
							this.setState({ratings: this.state.moviedetails.releases.countries[i].certification})
						}
					}
				});
			});
			
			if (timer) {
				clearTimeout(timer);
			}
			this.refs.search.value = "";
		},
		
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
			if (timer) {
				clearTimeout(timer);
			}

			if (this.state.counter == 0) {
				this.setState({'counter': this.state.movieList.length - 1});
			} else {
				this.setState({'counter': this.state.counter -= 1});
			}
		},
		Next: function() {
			if (timer) {
				clearTimeout(timer);
			}
			
			if (this.state.counter == this.state.movieList.length - 1) {
				this.setState({'counter': 0});
			} else {
				this.setState({'counter': this.state.counter += 1});
			}
		},
		
		componentDidMount: function() {
			$.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US&page=1', (data) => {
				this.setState({'movieList': data.results});
			});
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
		getInitialState: function(){
			return {
				displayRecent: true
			}
		},
		handleRecent: function() {
			this.setState({displayRecent: false});
		},
		render() {
			return (
				<div id='main'>
          <Header />
					<Search onclick={this.handleRecent} />
					{this.state.displayRecent ? <RecentMovies /> : null}
				</div>
			);
		}
	});


	ReactDOM.render(<Main />, document.getElementById('app'));
})();
