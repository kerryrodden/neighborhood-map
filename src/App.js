import React, { Component } from 'react';
import ResultsList from './ResultsList';
import ResultsMap from './ResultsMap';
import * as SchoolsAPI from './SchoolsAPI';
import './App.css';

class App extends Component {
  state = {
    results: []
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
  componentDidMount() {
    SchoolsAPI.getAllPublicElementary().then((results) => {
      this.setState({ results });
    });
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
