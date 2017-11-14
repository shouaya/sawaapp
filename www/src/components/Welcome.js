import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'
class Welcome extends Component {
    
	 render() {
		return (
		   <div className="minibody">
		     <Segment color='blue'><Header as='h2'>welcome</Header>
		     </Segment>
		   </div>
		);
	}
}

export default Welcome;