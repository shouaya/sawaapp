import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import {
    Marker,
    InfoWindow,
} from "react-google-maps";
class CompanyMarker extends Component {
    
    componentWillMount() {
        this.setState({ isOpen: false})
    }
    
    onToggleOpen(){
        this.setState({ isOpen: !this.state.isOpen })
    }
    
    render() {
        const marker = this.props.marker
        const extra = (id) =>(
            <Button fluid color='teal'　as='a'　
                href={'/coinfo?id=' + id} 
                target='_blank'>
            <Icon name='share' /> プレエントリー </Button>
              )
        const address = marker.data.corporation.address.prefecture.name + marker.data.corporation.address.city.name + marker.data.corporation.address.streetNumber
        return (
            <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={this.onToggleOpen.bind(this)}>
                {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen.bind(this)}>
                <Card
                   image={'http://st.whaledata.jp/co/' + marker.id + '.png'}
                   header={marker.data.name}
                   meta={marker.data.business}
                   description={address}
                   extra={extra(marker.id)}/>
                </InfoWindow>}
            </Marker>
        );
    }
}
export default CompanyMarker;