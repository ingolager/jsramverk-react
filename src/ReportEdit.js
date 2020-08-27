import './App.css';
import React, { Component } from 'react';

class ReportEdit extends Component {
    constructor(props) {
    super(props);
    this.state = {
        week: "",
        reportText: "",
        value: "",
        token: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

  handleSubmit(event) {
      const pathArray = window.location.pathname.split('/');
      const week = pathArray[3];
      event.preventDefault();
      this.putAPI();
      this.props.history.push("../../reports/week/" + week);
}

callAPI() {
    const pathArray = window.location.pathname.split('/');
    const week = pathArray[3];
    fetch("http://localhost:1337/reports/week/" + week)
        .then(res => res.json())
        .then(data => this.setState({ data } ))
}

putAPI() {
    const pathArray = window.location.pathname.split('/');
    const week = pathArray[3];
    this.state.week = week;
    fetch("http://localhost:1337/reports",
  {
    method: "PUT",
    headers: {
        'Content-type': 'application/json'
  },
    body: JSON.stringify(this.state)
})
.then(response => response.json())
.then(data => console.log(data))
}

componentWillMount() {
    this.callAPI();
}


    render() {
        const pathArray = window.location.pathname.split('/');
        const week = pathArray[3];
        this.state.token = localStorage.getItem('token');
        return (
            <form onSubmit={this.handleSubmit}>
              <h2>Redigera redovisning vecka {week}</h2>
                <div className='Register'>
                <label className="input-label">Redigera texten och skicka.<br></br>
                <textarea
                  className="input-field"
                  name="text"
                  type="text"
                  defaultValue={this.state.data}
                  value={this.state.value}
                  onChange={this.handleChange}
                  />
                 </label>
                 </div>
                 <input
                    type="hidden"
                    value={this.state.token}
                    onChange={this.handleChange} />
                 <input
                     className="submit"
                     type="submit"
                     value="Skicka formuläret" />
            </form>
            )
        }
    }

export default ReportEdit;
