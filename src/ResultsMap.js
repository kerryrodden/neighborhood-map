import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import './App.css';

// TODO: should these be declared in App.js and passed in as props?
const MAP_CENTER = { lat: 37.7749, lng: -122.4194 }; // San Francisco
const DEFAULT_ZOOM = 12;
const BLUE_MARKER = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
const RED_MARKER = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';

const WrappedGoogleMap = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    {props.results.map((result) => {
      return (
        <Marker
          key={result.id}
          position={result.position}
          icon={result.open ? RED_MARKER : BLUE_MARKER}
          onClick={result.open ? () => props.onCloseResult(result) : () => props.onOpenResult(result)}
          >
          {result.open && <InfoWindow onCloseClick={() => props.onCloseResult(result)}>
            <div>
              <h2>{result.name}</h2>
              <p>some description here</p>
            </div>
          </InfoWindow>}
        </Marker>
      )
    })}
  </GoogleMap>
)

class ResultsMap extends Component {
  render() {
    return (
      <div className="results-map">
        <WrappedGoogleMap
          results={this.props.results}
          zoom={DEFAULT_ZOOM}
          center={MAP_CENTER}
          onOpenResult={this.props.onOpenResult}
          onCloseResult={this.props.onCloseResult}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default ResultsMap;