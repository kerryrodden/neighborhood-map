import React, { Component } from 'react';
import ResultsList from './ResultsList';
import ResultsMap from './ResultsMap';
import './App.css';

class App extends Component {
  state = {
    results: [
      { name: "Dolores Park", lat: 37.759773, lng: -122.427063, open: true },
      { name: "Buena Vista Park", lat: 37.768204, lng: -122.441772, open: false }
    ]
  }
  openResult = (result) => {
    console.log("open", result);
    result.open = true;
    this.setState((currentState) => ({
      results: currentState.results.map(r => (result.name === r.name) ? result : r)
    }));
  }
  closeResult = (result) => {
    console.log("close", result);
    result.open = false;
    this.setState((currentState) => ({
      results: currentState.results.map(r => (result.name === r.name) ? result : r)
    }));
  }
  render() {
    return (
      <div className="app">
        <div className="list-container">
          <h1>Neighborhood Map</h1>
          <ResultsList results={this.state.results} onOpenResult={this.openResult} onCloseResult={this.closeResult}/>
        </div>
        <div className="map-container">
          <ResultsMap results={this.state.results} onOpenResult={this.openResult} onCloseResult={this.closeResult}/>
        </div>
      </div>
    );
  }
}

export default App;
