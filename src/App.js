import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Report from './Report.js';
import Me from './Me.js';
import ReportForm from './ReportForm';
import ReportEdit from './ReportEdit';
import RegisterForm from './RegisterForm';
import Registered from './Registered';
import Login from './Login';
import Loggedin from './Loggedin';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        message: []
    }
  }

  handleClick() {
    localStorage.removeItem('token');
    localStorage.removeItem('logged');
    window.location.reload();
  }

  callbackFunction = (childData) => {this.setState({message: childData})};

  render() {
    const token = localStorage.getItem('token');
    console.log(token);
    const logged = localStorage.getItem('logged');
    const result = localStorage.getItem('result');
    const message = localStorage.getItem('message');
    let wrong = "";
    if (message === "false") {
        wrong = alert(logged);
        localStorage.removeItem('message');
    }




    console.log("result: ", result);
    let inLogg;
    if (token !== null && token.length > 20) {
        inLogg = <header><h1>Jag och React<div className="Message"><ul><li>{logged}</li><button onClick={() => this.handleClick()}><li>logga ut</li></button></ul></div></h1></header>
    } else {
        inLogg = <header> <h1>Jag och React<div className="Inlogg"><Login parentCallback = {this.callbackFunction}/></div></h1>{wrong}</header>
    }
    console.log(inLogg)


    return (
      <Router>

     <div class="flex-wrapper">
           {inLogg}
        <div className="Container">

        <div className="App-nav">
          <nav>
            <ul>
              <li><Link to="/">om mig</Link></li>
              <li><Link to="/register">skapa konto</Link></li>
              <li><Link to="/reports/week/1">vecka 1</Link></li>
              <li><Link to="/reports/week/2">vecka 2</Link></li>
              <li><Link to="/report">Redovisa</Link></li>
            </ul>
          </nav>
          </div>

          <div className="App">

          <Route exact path="/" component={Me} />
          <Route path="/reports/week/1" component={Report} />
          <Route path="/reports/week/2" component={Report} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/report" component={ReportForm} />
          <Route path="/edit/week/1" component={ReportEdit} />
          <Route path="/edit/week/2" component={ReportEdit} />
          <Route path="/registered" component={Registered} />
          <Route path="/login" component={Login} />
          <Route path="/loggedin" component={Loggedin} />

          </div>

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
