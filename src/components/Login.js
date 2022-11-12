import React, { Component } from "react";
import { MyContext } from "../App";
// import { withRouter } from "react-router-dom";
import "../css/Login.css";

class Login extends Component {
  userIdRef;
  passwordRef;

  constructor() {
    super();
    this.userId = "";
    this.password = "";
    this.state = {
      buttonFlag: true,
      userIdErrFlag: true,
      passwordErrFlag: true,
    };
  }

  signIn(context) {
    console.log(this.props);
    let users = context.store.users.filter(
      (user) =>
        user.userId === this.userIdRef.value &&
        user.password === this.passwordRef.value
    );
    if (users && users.length === 1) {
      this.props.history.push("/");
    } else console.log("login unsuccessfull");
  }

  textValueChanged() {
    this.setState({
      buttonFlag:
        this.userIdRef.value.length < 1 || this.passwordRef.value.length < 1
          ? true
          : false,
      userIdErrFlag: this.userIdRef.value.length < 1 ? true : false,
      passwordErrFlag: this.passwordRef.value.length < 1 ? true : false,
    });
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container c-login">
            <h1 className="text-dark mt-3">Sign In</h1>
            <hr />
            <form>
              <div className="mb-3">
                <label className="form-label">
                  <strong>User Id</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userId"
                  placeholder="enter your user id here..."
                  ref={(input) => {
                    this.userIdRef = input;
                  }}
                  onInput={() => this.textValueChanged()}
                />
                {this.state.userIdErrFlag ? (
                  <p className="text-dark mt-2">User Id can't be empty</p>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="enter your password here..."
                  ref={(input) => {
                    this.passwordRef = input;
                  }}
                  onInput={() => this.textValueChanged()}
                />
                {this.state.passwordErrFlag ? (
                  <p className="text-dark mt-2">Password can't be empty</p>
                ) : (
                  ""
                )}
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.signIn(context)}
                disabled={this.state.buttonFlag}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Login;
