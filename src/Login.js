import './App.css';
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendData = this.sendData.bind(this);
    this.state = {
        data: {},
        email: "",
        password: "",
        };
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
        event.preventDefault();
        this.postAPI();
        this.setState({
            password: "" });
    }

    sendData = () => {
        let message = "";

        const result = this.state.data.result;
        console.log(this.state.data.result)
        switch (result) {
            case "finns inte":
            case false:
                message = "false";
                break;
            case true:
                message = "true";
                break;
        }
        localStorage.setItem('message', message);
        this.props.parentCallback([localStorage.getItem('message'), this.state.data.token]);
    }

    storeMessage = () => {
        const result = this.state.data.result;
        let logged = "";
        console.log("email: ", this.state.email);
        switch (result) {
            case "finns inte":
                logged = "Det finns ingen användare med denna e-postadress.";
                break;
            case false:
                logged = "Fel lösenord.";
                break;
            case true:
                logged = "Du är inloggad som " + this.state.email;
                break;
        }
        localStorage.setItem('logged', logged);
    }

    postAPI() {
        fetch("http://localhost:1337/login",
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
    )
    .then(response => response.json())
    .then(data => this.setState({ data }))
    .then(data => (console.log("hej ", this.state.data.result)))
    .then(data => localStorage.setItem('token', this.state.data.token))
    .then(data => localStorage.setItem('result', this.state.data.result))
    .then(data => this.storeMessage())
    .then(data => this.sendData(this.state.data))
    }

render() {
    return (
    <form className="login-form" onSubmit={this.handleSubmit}>
    <ul>
        <li>

      Logga in:

      </li>
      <li>
      <input
        className="input-login"
        name="email"
        type="email"
        placeholder="e-post"
        value={this.state.email}
        onChange={this.handleChange}
        required
        />
       </li>
       <li>
       <input
        className="input-login"
         name="password"
         type="password"
         placeholder="lösenord"
         value={this.state.password}
         onChange={this.handleChange}
         required
         />
         </li>


        <li>
       <input
           className="submit"
           type="submit"
           value="Skicka" />
           </li>
           </ul>

  </form>

)
}
}

export default Login;
