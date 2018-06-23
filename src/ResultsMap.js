import React, { Component } from 'react';
import './App.css';

class ResultsMap extends Component {
  render() {
    return (
      <div className="results-map">
        {this.props.results.map((result, index) => {
          // TODO: use a more meaningful (and unique) key here
          return (
            <p key={index}>Marker for {result.location}</p>
          )
        })}
      </div>
    );
  }
}

export default ResultsMap;