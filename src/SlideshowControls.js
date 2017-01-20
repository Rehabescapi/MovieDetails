import React from 'react';

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

  export default SlideshowControls;
