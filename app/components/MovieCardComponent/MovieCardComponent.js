import React, { Component } from 'react';

import {cardTitle, card} from './MovieCardComponent.css';
import {Link, withRouter , NavLink} from 'react-router-dom'
import {bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
export default class MovieCard extends Component {
	
	render() {
		const imgSrc = 'https://image.tmdb.org/t/p/w500/';
		const title = this.props.title;
		const style = {
			backgroundImage:'url('+ imgSrc + this.props.backdrop +')',
			
		}

		return (
			
			<div className={card} style={style} >
				<p className={cardTitle}>{this.props.title}</p>
			</div>
			
		);
	}
};
