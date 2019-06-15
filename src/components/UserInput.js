import React, { Component } from "react";

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      hometown: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({ type: "ADD_USER", user: this.state });
    this.setState({ username: "", hometown: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} type="text" name="username" />
          <input onChange={this.handleOnChange} type="text" name="hometown" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInput;
