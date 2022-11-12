import React, { Component } from "react";
import "../css/Movies.css";
import { NavLink } from "react-router-dom";
import { MyContext } from "../App";

class Movies extends Component {
  mapMovies(context) {
    const table = context.store.movies.map((movie, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>
          <NavLink className="link-title" to={"/moviedetail/" + movie.id}>
            <strong>{movie.title}</strong>
          </NavLink>
        </td>
        <td>
          <NavLink to={"/moviedetail/" + movie.id}>
            <img src={movie.backdrop_path} alt="..." height="100"></img>
          </NavLink>
        </td>
        <td>{movie.release_date}</td>
        <td>{movie.vote_average}</td>
      </tr>
    ));
    return table;
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container c-1">
            <NavLink className="link-arrow-movies" to="/">
              <span class="material-icons" style={{ fontSize: "40px" }}>
                arrow_back
              </span>
            </NavLink>
            <p className="display-4 text-white my-4 mb-5 pb-4">All Movies</p>
            <div className="row">
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Release Date</th>
                    <th scope="col">Review</th>
                  </tr>
                </thead>
                <tbody className="table-info center">{this.mapMovies(context)}</tbody>
              </table>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Movies;
