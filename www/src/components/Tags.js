import React, { Component } from 'react';
import WordCloud from 'react-d3-cloud';
import { Container, Icon, Segment } from 'semantic-ui-react'
class Tags extends Component {
	 render() {
	    if(this.props.tags.length === 0) return null
		const fontSizeMapper = word => parseInt((word.value + "").substr(1,2), 10)/2;
		return (
            <Container textAlign='justified'>
              <h3><Icon name='tags' />タグ・クラウド</h3>
              <Segment color='blue'>
    		  <WordCloud
    		    width={1000}
    		    height={600}
    		    data={this.props.tags}
    		    fontSizeMapper={fontSizeMapper}
    		  />
    		  </Segment>
            </Container>
		);
	}
}

export default Tags;