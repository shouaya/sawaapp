import React, { Component } from 'react';
import { Container, Table, Icon } from 'semantic-ui-react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
class CompanyCorporation extends Component {
     render() {
        const info = this.props.info
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={13}
              defaultCenter={{ lat: Number(info.corporation.address.lat), lng: Number(info.corporation.address.lng) }}>
              <Marker
                position={{ lat: Number(info.corporation.address.lat), lng: Number(info.corporation.address.lng) }} />
            </GoogleMap>
        ));
        return (
          <Container textAlign='justified'>
            <h3><Icon name='university' />法人情報</h3>
            <Table color='blue' celled>
               <Table.Body>
                 <Table.Row>
                   <Table.Cell positive>商号番号</Table.Cell>
                   <Table.Cell>{info.corporation.corporateNumber}</Table.Cell>
                   <Table.Cell positive>商号名</Table.Cell>
                   <Table.Cell>{info.corporation.name}</Table.Cell>
                 </Table.Row>
                 <Table.Row >
                   <Table.Cell rowSpan={2} positive>事務所の所在地</Table.Cell>
                   <Table.Cell colSpan={3}>
                   <MapWithAMarker
                       googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDyx1KwCGrRZzoifVyaAtGazkm7x2H2xZg&v=3.exp&libraries=geometry,drawing,places"
                       loadingElement={<div style={{ height: `100%` }} />}
                       containerElement={<div style={{ height: `400px` }} />}
                       mapElement={<div style={{ height: `100%` }} />}
                     />
                   </Table.Cell>
                 </Table.Row>                               
                 <Table.Row>
                     <Table.Cell colSpan={3}>〒{info.corporation.address.postCode + info.corporation.address.prefecture.name + info.corporation.address.city.name + info.corporation.address.streetNumber}</Table.Cell>
                 </Table.Row>
               </Table.Body>
             </Table>
          </Container>
        );
    }
}
export default CompanyCorporation;