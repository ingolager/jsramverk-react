import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Register extends Component {
    constructor(props) {
    super(props);
    this.state = {
        namn: '',
        email: '',
        car: '',
        modalIsOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(event) {
    alert('Namn: ' + this.state.namn +
          '\n' + 'Email: ' + this.state.email +
          '\n' + 'Bil: ' + this.state.car);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Bli medlem</h2>
        <label>Namn</label><br></br>
        <input
          name="namn"
          type="text"
          value={this.state.namn}
          onChange={this.handleChange} />
        <br></br><br></br>
        <label>E-post</label><br></br>
        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br></br><br></br>
        <label>Födelsedag</label><br></br>
         <input onClick={this.openModal} />
          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          onChange={this.handleChange}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Ange födelsedag</h2>
          <button onClick={this.handleSubmit}>close</button>
          <div>I am a modal</div>
          <form>
            <select name="car" value={this.state.car} onChange={this.handleChange}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>

            </select>
          </form>
        </Modal>
      </form>
    );
  }
}

// class Register extends Component {
//   render() {
//       return (
//           <div className="Me">
//             <h2>Bli medlem</h2>
//             <p>Registrera dig här. Ange gärna ditt födelsedatum så att får du din tårta när du fyller år.</p>
//             <form>
//             <label className="input-label">Namn<br></br>
//                 <input type="text" name="name" class="input-field" required></input>
//             </label>
//             <br></br>
//             <label className="input-label">E-post<br></br>
//                 <input type="email" name="email" class="input-field" required></input>
//             </label>
//             <br></br>
//             <label className="input-label">Födelsedag<br></br>
//                 <input type="date" name="birthday" class="input-field"></input>
//             </label>
//             // <br></br>
//             // <label class="input-label">
//             //     <input type="checkbox" name="gdpr">&nbsp;Jag godkänner</input>
//             // </label>
//
//             </form>
//           </div>
//     );
//   }
// }

export default Register;
