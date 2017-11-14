import React, { Component } from 'react';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
} from "react-google-maps";
import CompanyMarker from "./CompanyMarker"
class CompanyMap extends Component {
    
    componentWillMount() {
        this.setState({ isOpen: [] })
    }
    
    onToggleOpen(mark){
        let arr = this.state.isOpen
        arr[mark.id] = !arr[mark.id]
        this.setState({ isOpen: arr })
    }
    
    render() {
        const { compose, withProps } = require("recompose");
        const MapWithAMarkerClusterer = compose(
            withProps({
              googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDyx1KwCGrRZzoifVyaAtGazkm7x2H2xZg&v=3.exp&libraries=geometry,drawing,places",
              loadingElement: <div style={{ height: `100%` }} />,
              containerElement: <div style={{ height: `600px` }} />,
              mapElement: <div style={{ height: `100%` }} />,
            }),
            withScriptjs,
            withGoogleMap
          )(props =>
            <GoogleMap
              defaultZoom={6}
              defaultCenter={{ lat: 35.6654511, lng: 139.7525045 }}
            >
              <MarkerClusterer
                averageCenter
                enableRetinaIcons
                gridSize={60}
              >
                {props.markers.map(marker => (
                  <CompanyMarker key={marker.id} marker={marker} />
                ))}
              </MarkerClusterer>
            </GoogleMap>
        );
        return (
           <MapWithAMarkerClusterer markers={this.props.markers} />
        );
    }
}
export default CompanyMap;