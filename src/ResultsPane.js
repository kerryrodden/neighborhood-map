import React, { Component } from 'react';
import './App.css';

// Basic alphabetical sort by school name
const sortByName = (a, b) => {
  return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
}

// Pane that includes filter controls and list of results.
// Structured with semantic elements: header, main, footer.
class ResultsPane extends Component {
  render() {
    return (
      <div className="results-pane">
        <header>
          <h1>San Francisco Public Schools</h1>
          <div className="filter-controls">
            <form aria-label="Filter the list of schools">
              <label htmlFor="select-grade-range">Grade range:</label>
              <select id="select-grade-range" value={this.props.gradeRange} onChange={(event) => this.props.onFilterChange(event.target.value)}>
                <option value="all">All</option>
                {this.props.uniqueGradeRanges.map((gradeRange) => {
                  return (
                    <option key={gradeRange} value={gradeRange}>{gradeRange}</option>
                  )
                })}
              </select>
            </form>
          </div>
        </header>
        <main aria-label="List of schools matching the selected grade range. Clicking one will open it on the map.">
          <div className="results-container">
            {!this.props.dataUnavailable && (
              <div className="results-list">
                {this.props.results.sort(sortByName).map((result) => {
                  return (
                    // Use button elements here to enable easy keyboard navigation
                    <button key={result.id}
                      className={result.open ? "result-item opened" : "result-item"}
                      onClick={() => this.props.onToggleResult(result)}>
                      <h2 className="result-name">{result.name}</h2>
                      <p className="result-details">{result.gradeRange}, District {result.district}</p>
                    </button>
                  )
                })}
              </div>
            )}
            {this.props.dataUnavailable && (
              <p className="error-message">Could not fetch results from server</p>
            )}
          </div>
        </main>
        <footer>Schools data from <a target="_blank" rel="noopener noreferrer" href="https://datasf.org/opendata/">DataSF</a></footer>
      </div>
    );
  }
}

export default ResultsPane;