import React, { Component } from 'react'
import{connect} from"react-redux"
import {fetchMovie} from "../../actions/searchAction"
import {Link} from "react-router-dom"
 class Movie extends Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id)
    }
    render() {
        let {movie}=this.props
        return (
            <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {movie.Plot}
              <hr />
              <a
                href={'https://www.imdb.com/title/' + movie.imdbID}
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-success text-light ml-3">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>  
        )
    }
}
const mapToProps=state=>({
    movie:state.movie
})

export default connect(mapToProps,{fetchMovie})(Movie)