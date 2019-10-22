import React, { Component } from 'react';
import axios from 'axios';
import { meHead, meText } from './Me.json';
import jag from './jag.jpg'


class Me extends Component {
    constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
}

componentDidMount() {
    // axios.get('http://localhost:1337/me')
    axios.get('https://backend.ingolager.me/me')
        .then(res => {
            const apiResponse = res.data;
            this.setState({ apiResponse });
            const response = this.state.apiResponse.data.msg;
            this.setState({response})
            console.log(response);
    })
}

  render() {
      return (
          <div className="Me">
            <h2> { meHead } </h2>
            <img src={jag} alt="jag" />
            <p> { this.state.response } </p>
          </div>
    );
  }
}


export default Me;
