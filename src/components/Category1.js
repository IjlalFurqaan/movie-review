import React, { Component } from "react";
import { MyContext } from "../App";

class Category extends Component {
  // constructor(){
  //     super();

  // }

  mapMoviesList(context, category) {
    // console.log(category);
    // console.log(context.store);

    return context.store.movies.map((movie, index) => 
      (category === movie.category) ? 
        (<div className="card my-2" key={index}>
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
          </div>
        </div>) : ""
    );
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="container">
            <p className="display-4 text-primary my-4">{this.props.match.params.category} Movies</p>
            <hr />
            <div className="list-group">
              {this.mapMoviesList(context, this.props.match.params.category)}
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Category;
