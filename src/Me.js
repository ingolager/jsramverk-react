import React, { Component } from 'react';

class Me extends Component {
    constructor(props) {
    super(props);
    this.state = { data: [] }
}
    callAPI() {
        fetch("http://localhost:1337/aboutme")
            .then(res => res.json())
            .then(data => this.setState({ data }))
            .then(data => console.log(this.state.data));
    }

    componentWillMount() {
        this.callAPI();
    }


  render() {
      const text = this.state.data;
      return (

          <div className="Me">
            <h2> { text[0] } </h2>
            <img src="http://localhost:1337/images/jag.jpg" alt="jag"/>
            <p className="App"> {text[1]}</p>
          </div>
    );
  }
}


export default Me;
