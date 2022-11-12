import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/Home.css";
import homejson from "../data/home.json";

const sec1_img =
  "https://images.squarespace-cdn.com/content/v1/521f4119e4b0609085e5ab68/1626812051273-QGCF2NPQKA5D3X38217I/SAM-48-Bond_Screening-web.jpg";

class Home extends Component {
  nameRef;
  emailRef;
  textRef;

  constructor() {
    super();

    this.state = {
      nameflag: false,
      emailflag: false,
      textflag: false,
    };
  }

  mapsection1() {
    // console.log(this.state.home.section1);
    const list = homejson["section1"].map((movie, index) => (
      <div className="carousel-item" key={index}>
        <NavLink to={"/moviedetail/" + movie.id}>
          <img
            src={movie.img}
            className="d-block w-100"
            alt="..."
            height="500"
            width="300"
          />
        </NavLink>
      </div>
    ));
    return list;
  }

  mapsection2() {
    // console.log(this.state.home.section2);
    const list = homejson["section2"].map((movie, index) => (
      <div className="card card-item-1" key={index}>
        <NavLink className="card-img" to={"/moviedetail/" + movie.id}>
          <img
            src={movie.img}
            className="card-img-top"
            alt="..."
            height="300"
          />
        </NavLink>

        <NavLink className="card-t-1" to={"/moviedetail/" + movie.id}>
          <h4 className="card-title">{movie.title}</h4>
        </NavLink>

        <NavLink className="btn btn-success card-btn" to="/">
          All Reviews
        </NavLink>
        <NavLink className="btn btn-primary card-btn" to="/">
          Add Your Review
        </NavLink>
      </div>
    ));
    return list;
  }

  mapsection3() {
    // console.log(this.state.home.section3);
    const list = homejson["section3"].map((movie, index) => (
      <div className="card card-item" key={index}>
        <NavLink className="card-img" to={"/category/" + movie.category}>
          <img
            src={movie.img}
            className="card-img-top"
            alt="..."
            height="300"
          />
        </NavLink>
        <h4 className="card-title card-t">{movie.category}</h4>
      </div>
    ));
    return list;
  }

  resetflag() {
    this.setState({
      nameflag: false,
      emailflag: false,
      textflag: false,
    });
  }

  contactUs() {
    // console.log(this.nameRef.value);
    // console.log(this.emailRef.value);
    // console.log(this.textRef.value);

    // var flag = true;
    // this.resetflag();

    if (this.nameRef.value.length <= 0) {
      this.setState({ nameflag: true });
    } else if (this.nameRef.value.length < 10) {
      this.setState({ emailflag: true });
    } else if (this.textRef.value.length < 0) {
      this.setState({ textflag: true });
    } else {
      alert("Thank You for Connecting With Us");
    }
  }

  render() {
    return (
      <>
        <section id="section-1">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide carousel-b"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div className="carousel-inner">
              <NavLink className="carousel-item active" to="/moviedetail">
                <img
                  src={sec1_img}
                  className="d-block w-100"
                  alt="..."
                  height="500"
                  width="300"
                />
              </NavLink>
              {this.mapsection1()}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section className="section-2">
          <h2 className="section-2-h2">Top Reviews</h2>
          <div className="showitem">{this.mapsection2()}</div>
        </section>
        <section className="section-3">
          <h2>Movies</h2>
          <div className="for-border"></div>
          <div className="showitem-2">{this.mapsection3()}</div>
        </section>
        <section className="section-4">
          <div className="column2">
            <div className="card2">
              <p>
                <span className="material-icons section-4-icon">
                  play_circle_filled
                </span>
              </p>
              <h3>1000+</h3>
              <p>Total Movies</p>
            </div>
          </div>

          <div className="column2">
            <div className="card2">
              <p>
                <span className="material-icons section-4-icon">movie</span>
              </p>
              <h3>55+</h3>
              <p>Latest Movies</p>
            </div>
          </div>

          <div className="column2">
            <div className="card2">
              <p>
                <span className="material-icons section-4-icon">reviews</span>
              </p>
              <h3>4000+</h3>
              <p>User Reviews</p>
            </div>
          </div>

          <div className="column2">
            <div className="card2">
              <p>
                <span className="material-icons section-4-icon">
                  rate_review
                </span>
              </p>
              <h3>0</h3>
              <p>Your Reviews</p>
            </div>
          </div>
        </section>
        <section className="section-5">
          <h2>Contact Us</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              ref={(input) => {
                this.nameRef = input;
              }}
              required
            />
            {this.state.nameflag ? (
              <p className="text-danger mt-2 error">*Name Too Short</p>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Email Address"
              ref={(input) => {
                this.emailRef = input;
              }}
              required
            />
            {this.state.emailflag ? (
              <p className="text-danger mt-1 error">*Email Too Short</p>
            ) : (
              ""
            )}
            <textarea
              placeholder="Your Thoughts"
              ref={(input) => {
                this.textRef = input;
              }}
              required
            ></textarea>
            {this.state.textflag ? (
              <p className="text-danger mt-2 error">*Please write something</p>
            ) : (
              ""
            )}
            <button
              type="button"
              className="btn btn-success contact-btn"
              onClick={() => this.contactUs()}
            >
              Send
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default Home;
