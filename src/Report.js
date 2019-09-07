import React, { Component } from 'react';
import { description } from './Me.json';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            kmom: props.match.params.kmom
        };
    }

  componentDidMount() {
      let that = this;
      fetch('./Me.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
          that.setState({
              questions: result.data
          });
      });
  }

  render() {
    const renderedQuestions = this.state.questions.map((question, index) => {
        return (
            <div className="question" key={index}>
                <p><strong>{ question.question }</strong></p>
                <p>{ question.answer }</p>
                <p>{ description }</p>
            </div>
        )
    });

    return (
        <main>
            <h2>{ this.state.kmom }</h2>
            <p>{ description }</p>
            { renderedQuestions }
        </main>


    );
  }
}

export default Report;
