import React, { Component } from 'react';
import { meHead, meText } from './Me.json';
import jag from './jag.jpg'

// class Me extends Component {
//   render() {
//       return (
//           <div className="Me">
//             <h2> { meHead } </h2>
//             <img src={jag} alt="jag" />
//             <p> { meText } </p>
//           </div>
//     );
//   }
// }

class Me extends Component {
  render() {
      return (
          <div className="Me">
            <h2> { meHead } </h2>
            <img src={jag} alt="jag" />
            <p> { meText } </p>
          </div>
    );
  }
}


export default Me;
