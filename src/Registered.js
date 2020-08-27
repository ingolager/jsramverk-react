import React, { Component } from 'react';
import Login from './Login';

class Registered extends Component {
  render() {
      return (
          <div className="Me">
            <h1>Tack för din registrering!</h1>
            <p>Nu kan du logga in för att lämna in och redigera rapporter.</p>
            <p>{Login.token}</p>
          </div>
    );
  }
}

export default Registered;
