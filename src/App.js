import React, { Component } from 'react';
import ResultsList from './ResultsList';
import ResultsMap from './ResultsMap';
import './App.css';

class App extends Component {
  state = {
    results: [
      { name: "Dolores Park", lat: 37.759773, lng: -122.427063 },
      { name: "Buena Vista Park", lat: 37.768204, lng: -122.441772 }
    ]
  }
  render() {
    return (
      <div className="app">
        <div className="list-container">
          <h1>Neighborhood Map</h1>
          <ResultsList results={this.state.results}/>
        </div>
        <div className="map-container">
          <ResultsMap results={this.state.results}/>
        </div>
      </div>
    );
  }
}

export default App;
