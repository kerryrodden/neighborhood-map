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
          <p>Placeholder for search controls</p>
        </div>
        <ol>
          {this.props.results.sort(sortByName).map((result) => {
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