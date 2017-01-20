import React from 'react';

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

  export default Header;
