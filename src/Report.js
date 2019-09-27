import React, { Component } from 'react';
import { reportHead, reportText } from './Me.json';

class Report extends Component {
  render() {
      return (
          <div className="Me">
            <h2> { reportHead } </h2>
            <p> { reportText } </p>
            <p> <a href="https://github.com/ingolager/jsramverk-react">Appens GitHub-repo</a> </p>
          </div>
    );
  }
}

export default Report;
