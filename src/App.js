import React, { Component } from 'react';
import ResultsList from './ResultsList';
import ResultsMap from './ResultsMap';
import './App.css';

class App extends Component {
  state = {
    results: [{ name: "San Francisco", location: [122.4194, 37.7749] }]
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
