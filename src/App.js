import React, { Component } from 'react';
import ResultsList from './ResultsList';
import ResultsMap from './ResultsMap';
import * as SchoolsAPI from './SchoolsAPI';
import './App.css';

class App extends Component {
  state = {
    results: [],
    uniqueGradeRanges: [],
    selectedGradeRange: "all"
  }
  onFilterChange = (selected) => {
    console.log(selected);
    this.setState({ selectedGradeRange: selected });
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
      const uniqueGradeRanges = [...new Set(results.map(result => result.grade_range))].sort();
      this.setState({ results, uniqueGradeRanges });
    });
  }
  render() {

    const filteredResults = this.state.results.filter((result) => {
      if (this.state.selectedGradeRange === "all") {
        return true;
      } else {
        return result.grade_range === this.state.selectedGradeRange;
      }
    });

    return (
      <div className="app">
        <div className="list-container">
          <h1>Neighborhood Map</h1>
          <ResultsList
            results={filteredResults}
            uniqueGradeRanges={this.state.uniqueGradeRanges}
            gradeRange={this.state.selectedGradeRange}
            onFilterChange={this.onFilterChange}
            onOpenResult={this.openResult}
            onCloseResult={this.closeResult}
          />
        </div>
        <div className="map-container">
          <ResultsMap
            results={filteredResults}
            onOpenResult={this.openResult}
            onCloseResult={this.closeResult}
          />
        </div>
      </div>
    );
  }
}

export default App;
