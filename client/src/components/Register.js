import React, { Component } from 'react';
import $ from 'jquery';
import Message from './Message';
import Grid from 'react-css-grid';

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
        <Grid col={12}><p className="join">Register now</p></Grid>
        <Grid col={3}><div></div></Grid>
        <Grid col={6}>
          <form className="form">
            <Grid col={12}>
              <label htmlFor='email'></label>
              <input className="inputs middleInputs" name='email' onChange={this.setInfo} placeholder='Email'/>
            </Grid>
            <Grid col={12}>
              <label htmlFor='country'></label>
              <input className="inputs" name='country' onChange={this.setInfo} placeholder="Country" />
            </Grid>
            <Grid col={12}>
              <label htmlFor='city'></label>
              <input className="inputs" name='city' onChange={this.setInfo} placeholder="City" />
            </Grid>
            <Grid col={12}>
            <button className="registerButton" onClick={this.addInfo}>Sign Me up!</button>
            </Grid>
          </form>
          <Grid col={12}>{message}</Grid>
        </Grid>
        <Grid col={3}><div></div></Grid>
      </div>
    )
  }
}

export default Register;
