import React, { Component } from 'react';

class Message extends Component {
  render() {
    const outcome = this.props.outcome;
    return (
      <div>{outcome}</div>
    )
  }
}

export default Message
