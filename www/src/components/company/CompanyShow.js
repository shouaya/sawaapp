import React, { Component } from 'react';
import { Container,Divider,Button,Image,Icon } from 'semantic-ui-react'
class CompanyShow extends Component {
     render() {
        const info = this.props.info
        const pagelink = info.page.length > 0 ? info.page[0].url : ""
        return (
              <Container textAlign='center'>
                <Image src={'http://st.whaledata.jp/co/' + info.id + '.png'} as='a' size='medium' 
                    href={pagelink} target='_blank'/>
                <Divider />
                <Button fluid color='teal'　as='a'　href={pagelink} target='_blank'><Icon name='share' /> ホームページへ</Button>
              </Container>
        );
    }
}
export default CompanyShow;