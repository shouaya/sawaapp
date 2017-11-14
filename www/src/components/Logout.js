import React, { Component } from 'react';
import Cache from '../tools/Cache';
import { Redirect } from 'react-router-dom'
class Logout extends Component {
	
	componentWillMount(){
		this.props.setUser(null)
		Cache.clearUser();
	}

	render() {
		return (
			<Redirect to="/login" />
		);
	}
}

export default Logout;