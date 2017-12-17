import React, { Component } from 'react';

import {cardTitle, innerCard} from './MovieCardComponent.css';
import {Link , NavLink} from 'react-router-dom'
import {bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
export default class MovieCardComponent extends Component {
	
	render() {
		const imgSrc = 'https://image.tmdb.org/t/p/w500/';
		const title = this.props.title;
		const style = {
			backgroundImage:'url('+ imgSrc + this.props.backdrop +')',
			
		}

		return (
			
			<div className={innerCard} style={style} >
				<p className={cardTitle}>{this.props.title}</p>
			</div>
			
		);
	}
};
