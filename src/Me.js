import React, { Component } from 'react';
import { mehead, metext } from './Me.json';
import jag from './jag.jpg'

class Me extends Component {
  render() {
      return (
          <div className="Me">
            <h2> { mehead } </h2>
            <img src={jag} alt="jag" />
            <p> { metext } </p>
          </div>
    );
  }
}


export default Me;
