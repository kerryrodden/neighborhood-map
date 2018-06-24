import React, { Component } from 'react';
import './App.css';

class ResultsList extends Component {
  render() {
    return (
      <div className="results-list">
        <div className="search-controls">
          <p>Placeholder for search controls</p>
        </div>
        <ol>
          {this.props.results.map((result, index) => {
            // TODO: use a more meaningful (and unique) key here
            return (
              <li key={index}
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