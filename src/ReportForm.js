import './App.css';
import React, { Component } from 'react';
import Select from 'react-select';


const weeks = Array.from(new Array(7),(val, index) => 1 + index);

class ReportForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        selectedWeek: "",
        reportText: "",
        token: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeWeek = this.handleChangeWeek.bind(this);
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

    handleChangeWeek = (selectedWeek) => {
      this.setState({ selectedWeek });
      console.log(selectedWeek);
  }

  handleSubmit(event) {
      event.preventDefault();
    alert('Vecka: ' + this.state.selectedWeek.value +
          '\n' + 'Rapport: ' + this.state.reportText);

    this.postAPI();

}

postAPI() {
  fetch("http://localhost:1337/reports",
  {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
  },
    body: JSON.stringify(this.state)
}
)
.then(response => response.json())
.then(data => console.log(data))
}


    render() {
        const weekDrop = weeks.map(v => ({
        label: v,
        value: v
      }));
      const { selectedWeek } = this.state.selectedWeek;
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
        this.state.token = localStorage.getItem('token')
        return (
            <form onSubmit={this.handleSubmit}>
              <h2>Redovisningar</h2>
              <div className="select-container">
                  <div className="item-select">
                  <label className="input-label">Vecka<br></br>
              <Select
                      className="react-select"
                      value={selectedWeek}
                      defaultValue={{ label: "Välj vecka", value: ""}}
                      options={weekDrop}
                      styles={customStyles}
                      onChange={this.handleChangeWeek}
                       />
                    </label>
                  </div>
                </div>
                <div className='Register'>
                <label className="input-label">Lämna din redovisning här<br></br>
                <textarea
                  className="input-field"
                  name="reportText"
                  type="text"
                  value={this.state.reportText}
                  onChange={this.handleChange}
                  required
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

export default ReportForm;
