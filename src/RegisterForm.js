import './App.css';
import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        data: [],
        email: "",
        password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        this.postAPI()
    }

    postAPI() {
        fetch("http://localhost:1337/register",
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
    )
    .then(response => response.json())
    .then(data => this.setState({ data } ))
    .then(data => (console.log(this.state.data.errno)))
    }

render() {
    if (this.state.data.errno === 19) {
        this.state.data.errno = "Din e-post är redan registrerad som användare";
    }
    if (this.state.data === "success") {
        this.props.history.push('/registered');
    }
    return (
    <form onSubmit={this.handleSubmit}>
      <h2>Skapa konto</h2>
      <div className='Register'>
      <label className="input-label">E-post<br></br>
      <input
        className="input"
        name="email"
        type="email"
        value={this.state.email}
        onChange={this.handleChange}
        required
        />
       </label>
       <label className="input-label">Lösenord<br></br>
       <input
         className="input"
         name="password"
         type="password"
         value={this.state.password}
         onChange={this.handleChange}
         required
         />
        </label>
        </div>
       <input
           className="submit"
           type="submit"
           value="Skicka" />
           <p>{this.state.data.errno}</p>
  </form>

)
}
}

export default RegisterForm;
