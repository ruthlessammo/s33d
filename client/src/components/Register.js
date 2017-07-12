import React, { Component } from 'react';
import $ from 'jquery';
import Message from './Message';

class Register extends Component{
  constructor() {
    super();
    this.state = {};
    this.setInfo = this.setInfo.bind(this);
    this.addInfo = this.addInfo.bind(this);
  }
  setInfo(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);

  }
  addInfo(e) {
    console.log('Fired!');
    e.preventDefault();
    $.post('http://localhost:4001/api/', this.state)
    .done(() => {
      console.log('posted');
    });
    $('input').val('');
    this.setState({ outcome: 'Successful registration!' });
    console.log(this.state.outcome);
  }

  render() {

    let message = null;
    if (this.state.outcome) {
      message = <Message outcome={this.state.outcome} />
    }

    return (
      <div className="formContainer">
        <form className="form">
          <label htmlFor='email'></label>
          <input className="inputs middleInputs" name='email' onChange={this.setInfo} placeholder='Email'/>
          <label htmlFor='country'></label>
          <input className="inputs" name='country' onChange={this.setInfo} placeholder="Country" />
          <label htmlFor='city'></label>
          <input className="inputs" name='city' onChange={this.setInfo} placeholder="City" />
          <button onClick={this.addInfo}>Sign Me up!</button>
        </form>
        {message}
      </div>
    )
  }
}

export default Register;
