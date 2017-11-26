import React , {Component} from 'react'
import PropTypes from 'prop-types'


import {MovieListContainer} from 'containers'
/* eslint-disable */
import { HeaderComponent} from 'components'

 class HomeContainer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			displayMovies: true
		}
    }
    

    componentDidMount(){
        
    }

	handleRecent = () => {
		this.setState({displayMovies: false});
	}
	
	render() {
		return (
			<div id='main'>
			
				<div className='innerContainer'>
				<MovieListContainer Title='Action' listType='Action' />

				</div>
			</div>
		);
	}
};

HomeContainer.propTypes = {
	
}

HomeContainer.contextTypes = {
	router : PropTypes.object.isRequired,
}

export default HomeContainer