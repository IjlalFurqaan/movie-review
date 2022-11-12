import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/About.css";
import p1 from "../images/about/Shammy.jpeg";
import p2 from "../images/about/Ijlal.jpeg";
import p3 from "../images/about/Rishav.jpeg";

class About extends Component {
  render() {
    return (
      <>
        <section className="section-1">
          <div>
            <div className="container py-5">
              <div className="row h-100 align-items-center py-5">
                <div className="col-lg-6">
                  <h1 className="display-4 mb-5">About Us</h1>
                  <p className="lead text-muted mb-0">
                    Drone energizes people around shared interests, igniting
                    important conversations with a cosmopolitan point of view
                    and providing the map to shrewdly navigate a fast-moving
                    culture.
                  </p>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-2">
          <div className="bg-white py-5">
            <div className="container py-5">
              <div className="row align-items-center mb-5">
                <div className="col-lg-6 order-2 order-lg-1">
                  <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                  <h2 className="font-weight-light">What We Do</h2>
                  <p className="font-italic text-muted mb-4">
                    Drone is a Focus on the Family publication designed to shine
                    a light on the world of popular entertainment while giving
                    families the essential tools they need to understand,
                    navigate, and impact the culture in which they live. Through
                    our reviews, articles and discussions, we hope to spark
                    intellectual thoughts.
                  </p>
                  <NavLink className="btn btn-light px-5 rounded-pill shadow-sm" to='/'>
                    Learn More
                  </NavLink>
                </div>
                <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                    alt=""
                    className="img-fluid mb-4 mb-lg-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-3">
          <div className="container">
            <h2 className="display-4 font-weight-light">Our team</h2>

            <div className="row text-center">
              {/* <!-- Team item--> */}
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4 curve">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Gowthami Pagidala</h5>
                  <span className="small text-uppercase text-muted">
                    Trainee-ASE
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-facebook-f"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-twitter"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-instagram"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-linkedin"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}

              {/* <!-- Team item--> */}
              <div className="col-xl-3 col-sm-6 mb-5 curve">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={p1}
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Shamshik Sai</h5>
                  <span className="small text-uppercase text-muted">
                    Trainee-ASE
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-facebook-f"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-twitter"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-instagram"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-linkedin"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}

              {/* <!-- Team item--> */}
              <div className="col-xl-3 col-sm-6 mb-5 curve">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={p2}
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Ijlal Furqaan</h5>
                  <span className="small text-uppercase text-muted">
                    Trainee-ASE
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-facebook-f"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-twitter"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-instagram"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-linkedin"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}

              {/* <!-- Team item--> */}
              <div className="col-xl-3 col-sm-6 mb-5 curve">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={p3}
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Rishav Sharma</h5>
                  <span className="small text-uppercase text-muted">
                    Trainee-ASE
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-facebook-f"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-twitter"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-instagram"></i>
                      </NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink className="social-link" to='/'>
                        <i className="fa fa-linkedin"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
