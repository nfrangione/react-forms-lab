import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => this.setState({message: e.target.value})

  render() {
    let remChar = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message} />
        <p>Characters Remaining: {remChar}</p>
      </div>
    );
  }
}

export default TwitterMessage;
