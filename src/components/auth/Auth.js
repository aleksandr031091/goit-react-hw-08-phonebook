import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const initialState = { name: "", email: "", password: "" };
class Auth extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { pathname } = this.props.location;
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onHandleChange}
            placeholder="Name"
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.onHandleChange}
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="text"
            name="pasword"
            value={password}
            onChange={this.onHandleChange}
            placeholder="Password"
          />
        </label>
        <button type="submit">
          {pathname === "/signIn" ? "Login" : "Register"}
        </button>
      </form>
    );
  }
}

export default withRouter(Auth);
