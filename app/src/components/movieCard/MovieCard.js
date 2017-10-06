import React, { Component } from 'react';
import {cardTitle, card} from './moviecard.css';

export default class MovieCard extends Component {
	handleClick = () => {
		var title = this.props.title;
		searchInput.value = title;
	}

	render() {
		const imgSrc = 'https://image.tmdb.org/t/p/w500/';

		const style = {
			backgroundImage:'url('+ imgSrc + this.props.backdrop +')',
			
		}

		return (
			<div className={card} style={style} onClick={this.handleClick}>
				<p className={cardTitle}>{this.props.title}</p>
			</div>
		);
	}
};