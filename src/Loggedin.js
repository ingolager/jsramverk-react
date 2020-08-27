import React, { Component } from 'react';

class Loggedin extends Component {
  render() {
      return (
          <div className="Me">
            <h1>Du är inloggad!</h1>
            <p>Nu kan du lämna in och redigera rapporter.</p>
          </div>
    );
  }
}

export default Loggedin;
