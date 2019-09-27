import React, { Component } from 'react';
import { reportHead2, reportText2a, reportText2b } from './Me.json';

class Report2 extends Component {
  render() {
      return (
          <div className="Me">
            <h2>{ reportHead2 }</h2>
            <p> { reportText2a } </p>
            <p> { reportText2b } </p>
            <p> <a href="https://github.com/ingolager/jsramverk-react">Appens GitHub-repo</a> </p>
          </div>
    );
  }
}

export default Report2;
