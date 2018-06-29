import React, { Component } from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  }

  render() {
    return (
      <form>
        <input
          placeholder="First Name"
          value={this.state.firstName}
          onChange={event => this.setState({firstName: event.target.value })}
          />
          <input
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={event => this.setState({firstName: event.target.value })}
          />
          <input
            placeholder="Username"
            value={this.state.username}
            onChange={event => this.setState({firstName: event.target.value })}
          />
          <input
            placeholder="Email"
            value={this.state.email}
            onChange={event => this.setState({firstName: event.target.value })}
          />
          <input
            placeholder="Password"
            value={this.state.password}
            onChange={event => this.setState({firstName: event.target.value })}
          />
      </form>
    )
  }
}
export default Form;
