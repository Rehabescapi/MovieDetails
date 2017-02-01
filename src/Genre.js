import React, { Component } from 'react';

export default class Genre extends Component {
	render() {
		return (
			<p className="genre">{this.props.genre}</p>
		)
	}
};
