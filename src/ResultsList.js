import React, { Component } from 'react';
import './App.css';

const sortByName = (a, b) => {
  return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
}

class ResultsList extends Component {
  render() {
    const results = this.props.results;
    const uniqueGradeRanges = [...new Set(results.map(result => result.grade_range))].sort();
    return (
      <div className="results-list">
        <div className="search-controls">
            <select value={this.props.gradeRange} onChange={(event) => this.props.onFilterChange(event.target.value)}>
              <option value="all">All grade ranges</option>
              {uniqueGradeRanges.map((gradeRange) => {
                return (
                  <option key={gradeRange} value={gradeRange}>{gradeRange}</option>
                )
              })}
            </select>
        </div>
        <ol>
          {results.sort(sortByName).map((result) => {
            return (
              <li key={result.id}
                className="search-result"
                onClick={result.open ? () => this.props.onCloseResult(result) : () => this.props.onOpenResult(result)}>
                {result.name}
              </li>
            )
          })}
        </ol>
      </div>
    );
  }
}

export default ResultsList;