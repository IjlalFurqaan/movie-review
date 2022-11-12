import React, { Component } from "react";
import "../css/Footer.css";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <section className="before-footer">
          <div className="sec-left">
            <span>
              <NavLink to="/">Contact</NavLink>
            </span>
            <span>
              <NavLink to="/">Privacy Policy</NavLink>
            </span>
            <span>
              <NavLink to="/">Terms of use</NavLink>
            </span>
            <span>
              <NavLink to="/">Community guidelines</NavLink>
            </span>
          </div>

          <div className="sec-right">
            <span className="fa fa-twitter"></span>
            <span className="fa fa-facebook"></span>
            <span className="fa fa-instagram"></span>
            <span className="fa fa-google"></span>
          </div>
        </section>
        <footer>
          <div>Copyright &copy; www.dronewebsite.com. All rights reserved!</div>
        </footer>
      </>
    );
  }
}

export default Footer;
