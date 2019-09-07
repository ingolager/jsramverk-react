
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './Me.js';
import Report from './Report.js';


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
              <li><Link to="/report/week/1">vecka 1</Link></li>
            </ul>
          </nav>
          </div>
          <div className="App">
          <Route exact path="/" component={Me} />
          <Route path="/report/week/" component={Report} />
          </div>
          </div>

          <footer>
          <p>&#9400; Ingvar Lagerlöf 2019</p>
          </footer>


      </Router>

    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
