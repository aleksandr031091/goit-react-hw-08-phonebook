import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loginUserOperation,
  registerUserOperation,
} from "../../redux/auth/authOperations";

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
    this.props.location === "signIn"
      ? this.props.loginUserOperation(this.state)
      : this.props.registerUserOperation(this.state);
    this.setState({ ...initialState });
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
            name="password"
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

export default connect(null, { registerUserOperation, loginUserOperation })(
  withRouter(Auth)
);
