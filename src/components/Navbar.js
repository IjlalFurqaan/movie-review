import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/header/logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={logo} alt="" width="50" height="50" />
          <p className="navbar-brand img-p my-2">Drone</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mx-auto"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/movies"
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/login"
                >
                  Log In
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>

              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="Search your favourate movie"
                />
                <button type="submit" className="searchButton">
                  <span className="material-icons md-48">search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
