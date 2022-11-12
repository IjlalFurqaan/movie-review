import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../css/Signup.css';


class SignUp extends Component {
  render() {
    return (
      <>
        <div className="container c-login">
          <h1 className="text-dark mt-3">Sign Up</h1>
          <hr />
          <form>
            <div ClassName="mb-3">
              <label ClassName="form-label">
                <strong>Email Address</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                placeholder="Enter your user Email here..."
              />
            </div>
            <div ClassName="mb-3">
              <label for="exampleInputEmail1" ClassName="form-label">
                <strong>Mobile number</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                placeholder="Enter your user mobile number here..."
              />
            </div>
            <div ClassName="mb-3">
              <label for="exampleInputPassword1" ClassName="form-label">
                {" "}
                <strong>Create Password</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                placeholder="Enter your new password here..."
              />
            </div>
            <div ClassName="mb-3">
              <label for="exampleInputPassword1" ClassName="form-label">
                {" "}
                <strong>Enter Password</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                placeholder="Enter your new password here..."
              />
            </div>
            <div>
              {" "}
              <button type="button" className="btn btn-primary mt-2">
                Submit
              </button>
            </div>
            <div className="button">
              <p>
                <strong>Already have an account?</strong>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/Login"
                >
                  <button className="btn btn-success mt-2"> Log In</button>
                </NavLink>{" "}
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
