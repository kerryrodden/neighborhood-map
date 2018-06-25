import React, { Component } from 'react';
import './App.css';

const sortByName = (a, b) => {
  return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
}

class ResultsList extends Component {
  render() {
    return (
      <div className="results-list">
        <div className="search-controls">
            <select value={this.props.gradeRange} onChange={(event) => this.props.onFilterChange(event.target.value)}>
              <option value="all">All grade ranges</option>
              {this.props.uniqueGradeRanges.map((gradeRange) => {
                return (
                  <option key={gradeRange} value={gradeRange}>{gradeRange}</option>
                )
              })}
            </select>
        </div>
        <ul>
          {this.props.results.sort(sortByName).map((result) => {
            return (
              <li key={result.id}
                className="search-result"
                onClick={result.open ? () => this.props.onCloseResult(result) : () => this.props.onOpenResult(result)}>
                {result.name}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default ResultsList;