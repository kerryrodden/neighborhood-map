import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import './App.css';

// TODO: should these be declared in App.js and passed in as props?
const MAP_CENTER = { lat: 37.7749, lng: -122.4194 }; // San Francisco
const DEFAULT_ZOOM = 12;

const WrappedGoogleMap = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    {props.markers.map((marker, index) => {
      return (
        <Marker key={index} position={{lat: marker.lat, lng: marker.lng}} />
      )
    })}
  </GoogleMap>
)

class ResultsMap extends Component {
  render() {
    return (
      <div className="results-map">
        <WrappedGoogleMap
          markers={this.props.results}
          zoom={DEFAULT_ZOOM}
          center={MAP_CENTER}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default ResultsMap;