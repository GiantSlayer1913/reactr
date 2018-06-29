import React, { Component } from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  }

  change = (event) => {
    event.preventDefault()
    this.setState({
    [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    })
  }

  render() {
    return (
      <form>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={event => this.change(event)}
          />
          <br />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
          onChange={event => this.change(event)}
          />
          <br />
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={event => this.change(event)}
          />
          <br />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={event => this.change(event)}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={event => this.change(event)}
          />
          <br />
          <button onClick={event => this.onSubmit(event)}>Submit</button>
      </form>
    )
  }
}
export default Form;
