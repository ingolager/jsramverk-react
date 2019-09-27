import './App.css';
import React, { Component } from 'react';
import Select from 'react-select';
import Popup from "reactjs-popup";
import {registerText} from './Me.json';

const today = new Date()
const year = today.getFullYear();
const years = Array.from(new Array(110),(val, index) => year - index);
const month = new Array();
month[0] = "januari";
month[1] = "februari";
month[2] = "mars";
month[3] = "april";
month[4] = "maj";
month[5] = "juni";
month[6] = "juli";
month[7] = "augusti";
month[8] = "september";
month[9] = "oktober";
month[10] = "november";
month[11] = "december";
const months = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti',
                'september', 'oktober', 'november', 'december'];
const days = Array.from(new Array(31),(val, index) => 1 + index);

class Register extends Component {
    constructor(props) {
    super(props);
    this.state = {
        namn: '',
        email: '',
        password: '',
        selectedYear: '',
        selectedMonth: '',
        selectedDay: '',
        gdpr: false,
        open: false,
        hidden: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.togglePass = this.togglePass.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChangeYear = (selectedYear) => {
    this.setState({ selectedYear });
    console.log(selectedYear);
  }

  handleChangeMonth = (selectedMonth) => {
    this.setState({ selectedMonth });
}

handleChangeDay = (selectedDay) => {
  this.setState({ selectedDay });
}


  handleSubmit(event) {
    alert('Namn: ' + this.state.namn +
          '\n' + 'Email: ' + this.state.email +
          '\n' + 'Lösenord: ' + this.state.password +
          '\n' + 'Födelsedag: ' + this.state.selectedDay.value +
          ' '
          + this.state.selectedMonth.value +
          ' '
          + this.state.selectedYear.value +
          '\n' + 'GDPR: ' + this.state.gdpr);

    event.preventDefault();
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  togglePass() {
    this.setState({ hidden: !this.state.hidden });
  }


  render() {
      const yearDrop = years.map(v => ({
      label: v,
      value: v
    }));
      const monthDrop = months.map(v => ({
      label: v,
      value: v
    }));
    const dayDrop = days.map(v => ({
    label: v,
    value: v
  }));
    const { selectedMonth } = this.state.selectedMonth;
    const { selectedYear } = this.state.selectedYear;
    const { selectedDay } = this.state.selectedDay;
    console.log(yearDrop)
      const customStyles = {
          SelectContainer: () => ({
              width: 100
          }),
          option: (provided, state) => ({
              ...provided,
              color: '#000',
              backgroundColor: state.isSelected ? '#B3AD90' : '#fff'
  })
}
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Registrera dig</h2>
        <div className='Register'><p>{registerText}</p></div>
        <label className="input-label">Namn<br></br>
        <input
          className="input-field"
          name="namn"
          type="text"
          value={this.state.namn}
          onChange={this.handleChange}
          required
          />
         </label>
        <label className="input-label">E-post<br></br>
        <input
          className="input-field"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        </label>
        <label className="input-label">Lösenord (minst 6 tecken)<br></br>
        <input
          className="input-field"
          name="password"
          type={this.state.hidden ? "password" : "text"}
          value={this.state.password}
          minlength="6"
          onChange={this.handleChange}
          required
        /><br></br>
        <input className="button"
                type="button"
                onClick={this.togglePass}
                value={this.state.hidden ? "Visa lösenordet" : "Dölj lösenordet"}>
                </input>
        </label>
        <label>Födelsedatum </label>
        <div className="select-container">
            <div className="item-select">
        <Select
                className="react-select"
                value={selectedYear}
                defaultValue={{ label: today.getFullYear(), value: today.getFullYear()}}
                options={yearDrop}
                styles={customStyles}
                onChange={this.handleChangeYear}
                 />
            </div>
            <div className="item-select">
        <Select
            className="react-select"
            value={selectedMonth}
            defaultValue={{ label: month[today.getMonth()], value: month[today.getMonth()]}}
            options={monthDrop}
            styles={customStyles}
            onChange={this.handleChangeMonth}
             />
             </div>
             <div className="item-select">
        <Select
            className="react-select"
            value={selectedDay}
            defaultValue={{ label: today.getDate(), value: today.getDate()}}
            options={dayDrop}
            styles={customStyles}
            onChange={this.handleChangeDay}
         />
            </div>
         </div>
        <br></br><br></br>
        <input
           className="gdpr"
           name="gdpr"
           type="checkbox"
           checked={this.state.gdpr}
           onChange={this.handleChange}
           required
           />
        <span>&nbsp;&nbsp;Jag godkänner användandet av mina personuppgifter.&nbsp;&nbsp;
        <input type='button' className="button" onClick={this.openModal} value="Hur vi hanterar persondata"/>
        </span>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            <p className="gdpr-text">Dina personuppgifter används enbart för att säkerställa att du är behörig att logga in på denna webbplats. De kommer inte att spridas till utomstående och kommer inte att användas för reklam eller till annat kommersiellt bruk.</p>
          </div>
        </Popup>
        <br></br><br></br>
        <input
            className="submit"
            type="submit"
            value="Skicka formuläret" />
      </form>

    );
  }
}


export default Register;
