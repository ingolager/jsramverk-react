import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Report extends Component {
    constructor(props) {
    super(props);
    this.state = { data: [] }
}
    callAPI() {
        const pathArray = window.location.pathname.split('/');
        const week = pathArray[3];

        fetch("http://localhost:1337/reports/week/" + week)
            .then(res => res.json())
            .then(data => this.setState({ data } ))
    }

    componentWillMount() {
        this.callAPI();
    }


  render() {
      const report = this.state.data;
      const pathArray = window.location.pathname.split('/');
      const week = pathArray[3];
      const editTarget = "/edit/week/" + week;
      console.log(editTarget);
      console.log(this.state.data);
      return (
          <div className="Me">
            <h2>Redovisning vecka { week }</h2>
            <p>{ report }</p>
            <Link to={editTarget}>
                <button type="button">
                Uppdatera texten
                </button>
                 </Link>

            <p><a href="https://github.com/ingolager/jsramverk-react">Appens GitHub-repo</a></p>
            </div>
    );
  }
}

export default Report;
