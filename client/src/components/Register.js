import React from 'react';
import axios from 'axios';

export default class Form extends React.Component{
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
    console.log('hello');
    e.preventDefault();
    axios.post('http://localhost:3001/api/', this.state)
    .done(() => {
      console.log('posted');

    });
  }

  render() {
    return (
      <div className="formContainer">
        <form className="form">
          <label htmlFor='name'></label>
          <input className="inputs" name='name' onChange={this.setInfo} placeholder='Name'/>
          <label htmlFor='email'></label>
          <input className="inputs middleInputs" name='email' onChange={this.setInfo} placeholder='Email'/>
          <div className="selection">
            <label className="provider middleInputs" htmlFor='provider'>Accounting platform used:</label>
            <select className="select" name='provider' onChange={this.setInfo}>
              <option value='null'>Please select</option>
              <option value='xero'>Xero</option>
              <option value='crunch'>Crunch</option>
              <option value='freeAgent'>Free Agent</option>
            </select>
          </div>
          <label htmlFor='size'></label>
          <input className="inputs company" placeholder="Company Size" name='size' onChange={this.setInfo} type='number'/>
          <button onClick={this.addInfo}>Sign Me up!</button>
        </form>
      </div>
    )
  }
}
