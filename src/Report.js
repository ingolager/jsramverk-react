import React, { Component } from 'react';
import { reporthead, reporttext } from './Me.json';

class Report extends Component {
  render() {
      return (
          <div className="Me">
            <h2> { reporthead} </h2>
            <p> { reporttext } </p>
            <p> <a href="https://github.com/ingolager/jsramverk-react">Appens GitHub-repo</a> </p>
          </div>
    );
  }
}

export default Report;
