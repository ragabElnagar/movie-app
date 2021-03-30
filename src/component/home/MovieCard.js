import React, { Component } from 'react';
import {Link} from "react-router-dom";
export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    console.log(movie)
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
        <div className="card card-body bg-dark text-center">
          <img className=" mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;