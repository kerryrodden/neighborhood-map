import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import './App.css';

const MAP_CENTER = { lat: 37.7749, lng: -122.4194 }; // San Francisco
const DEFAULT_ZOOM = 12;
const BLUE_MARKER = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
const RED_MARKER = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';

// Written with reference to react-google-maps documentation at
// https://tomchentw.github.io/react-google-maps/
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
          onClick={() => props.onToggleResult(result)}
          >
          {result.open && <InfoWindow onCloseClick={() => props.onToggleResult(result)}>
            <div className="result-info-window">
              <h2 className="result-name">{result.name}</h2>
              <p className="result-details">{result.address}</p>
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
      <div className="results-map" role="region" aria-label="Google Map with a marker for each school matching the selected grade range.">
        <WrappedGoogleMap
          results={this.props.results}
          zoom={DEFAULT_ZOOM}
          center={MAP_CENTER}
          onToggleResult={this.props.onToggleResult}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        )}
      </div>
    );
  }
}

export default ResultsMap;