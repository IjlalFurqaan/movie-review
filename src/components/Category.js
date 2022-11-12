import React, { Component } from "react";
import { MyContext } from "../App";
import "../css/Category.css";
import { NavLink } from "react-router-dom";

class Category extends Component {
  // constructor(){
  //     super();

  // }

  mapMoviesList(context, category) {
    // console.log(category);
    // console.log(context.store);

    return context.store.movies.map((movie, index) =>
      category === movie.category ? (
        <div className="card col-lg-5 mb-4 mx-4 card-c" key={index}>
          <div className="row carditem">
            <div className="col-md-4">
              <NavLink to={"/moviedetail/" + movie.id}>
                <img
                  src={movie.backdrop_path}
                  className="img-fluid rounded-start cardimg"
                  alt="..."
                />
              </NavLink>
            </div>
            <div className="col-md-8 c-body">
              <div className="card-body">
                <NavLink className="link-title" to={"/moviedetail/" + movie.id}>
                  <h5 className="card-title mb-3">{movie.title}</h5>
                </NavLink>
                <p className="c-rating">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <small className="text-muted">{movie.vote_average}</small>
                </p>
                <p className="card-text">{movie.overview}</p>
                <p className="card-text row">
                  <small className="text-muted mb-1">
                    Release Date: {movie.release_date}
                  </small>
                  <small className="text-muted">Vote: {movie.vote_count}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )
    );
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container c-movies">
            <NavLink className="link-arrow" to="/">
              <span class="material-icons" style={{ fontSize: "40px" }}>
                arrow_back
              </span>
            </NavLink>
            <div className="heading">
              <p className="display-4 text-white  p-change">
                {this.props.match.params.category} Movies
              </p>
              
              <div className="dropdown d-flex sorting-icon">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => this.sortByRank()}
                    >
                      Rank
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => this.sortByName()}
                    >
                      Name
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              {
                console.log(this.props.match.params.category),
                this.mapMoviesList(context, this.props.match.params.category)}
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Category;
