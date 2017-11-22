import React , {Component} from 'react'
import PropTypes from 'prop-types'



/* eslint-disable */


 class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayMovies: true
		}
	}

	handleRecent = () => {
		this.setState({displayMovies: false});
	}

	render() {
		return (
			<div id='main'>
				<Header />
				<div className='innerContainer'>
				{this.state.displayMovies ? <Genre.RecentMovies /> : null}

				</div>
			</div>
		);
	}
};

Main.propTypes = {
	
}

Main.contextTypes = {
	router : PropTypes.object.isRequired,
}

export default Main