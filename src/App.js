import React, { Component } from 'react';
import ResultsPane from './ResultsPane';
import ResultsMap from './ResultsMap';
import * as SchoolsAPI from './SchoolsAPI';
import './App.css';

class App extends Component {

  state = {
    results: [],
    uniqueGradeRanges: [],
    selectedGradeRange: "all",
    dataUnavailable: false,
    mapsError: false
  }

  onFilterChange = (selected) => {
    this.setState({ selectedGradeRange: selected });
  }

  // If this result was closed, open it, and otherwise ensure all results are closed.
  toggleResult = (result) => {
    this.setState((currentState) => ({
      results: currentState.results.map(r => ({ ...r, open: !result.open && r.name === result.name }))
    }));
  }

  componentWillMount() {
    // window.mapsError is potentially set to true in the maps error callback in index.html
    this.setState({ mapsError: window.mapsError || !navigator.onLine });
  }

  componentDidMount() {
    SchoolsAPI.getAllPublicElementary().then((results) => {
      const uniqueGradeRanges = [...new Set(results.map(result => result.gradeRange))].sort();
      this.setState({ results, uniqueGradeRanges });
    }).catch((error) => {
      console.log("Error fetching data from schools API", error);
      this.setState({ dataUnavailable: true });
    });
  }

  render() {

    const filteredResults = this.state.results.filter((result) => {
      if (this.state.selectedGradeRange === "all") {
        return true;
      } else {
        return result.gradeRange === this.state.selectedGradeRange;
      }
    });

    return (
      <div className="app">
        <ResultsPane
          dataUnavailable={this.state.dataUnavailable}
          results={filteredResults}
          uniqueGradeRanges={this.state.uniqueGradeRanges}
          gradeRange={this.state.selectedGradeRange}
          onFilterChange={this.onFilterChange}
          onToggleResult={this.toggleResult}
        />
        {!this.state.mapsError && <ResultsMap
          results={filteredResults}
          onToggleResult={this.toggleResult}
        />}
        {this.state.mapsError && (
          <p className="error-message">Could not load map: unable to connect to Google Maps</p>
        )}
      </div>
    );
  }
}

export default App;
