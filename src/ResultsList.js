import React, { Component } from 'react';
import './App.css';

const sortByName = (a, b) => {
  return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
}

class ResultsList extends Component {
  render() {
    return (
      <div className="results-pane">
        <header>
          <h1>San Francisco Public Schools</h1>
          <div className="search-controls">
            <label htmlFor="select-grade-range">Grade range:</label>
            <select id="select-grade-range" value={this.props.gradeRange} onChange={(event) => this.props.onFilterChange(event.target.value)}>
              <option value="all">All</option>
              {this.props.uniqueGradeRanges.map((gradeRange) => {
                return (
                  <option key={gradeRange} value={gradeRange}>{gradeRange}</option>
                )
              })}
            </select>
          </div>
        </header>
        <main>
          <div className="results-container">
            {!this.props.dataUnavailable && (
              <ul className="results-list">
                {this.props.results.sort(sortByName).map((result) => {
                  return (
                    <li key={result.id}
                      className={result.open ? "result-item opened" : "result-item"}
                      onClick={result.open ? () => this.props.onCloseResult(result) : () => this.props.onOpenResult(result)}>
                      <h2 className="result-name">{result.name}</h2>
                      <p className="result-details">{result.gradeRange}, District {result.district}</p>
                    </li>
                  )
                })}
              </ul>
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

export default ResultsList;