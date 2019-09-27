
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './Me.js';
import Report from './Report.js';
import Report2 from './Report2.js';
import Register from './Register.js';


class App extends Component {
  render() {
    return (
      <Router>
         <header>
            <h1>
            Jag och React
            </h1>
        </header>

        <div className="Container">
        <div className="App-nav">
          <nav>
            <ul>
              <li><Link to="/">om mig</Link></li>
              <li><Link to="/register">registrera dig</Link></li>
              <li><Link to="/report/week/1">vecka 1</Link></li>
              <li><Link to="/report/week/2">vecka 2</Link></li>
            </ul>
          </nav>
          </div>
          <div className="App">
          <Route exact path="/" component={Me} />
          <Route path="/report/week/1" component={Report} />
          <Route path="/report/week/2" component={Report2} />
          <Route path="/register" component={Register} />
          </div>
          </div>

          <footer>
          <p>&#9400; Ingvar Lagerlöf 2019</p>
          </footer>


      </Router>

    );
  }
}

export default App;
