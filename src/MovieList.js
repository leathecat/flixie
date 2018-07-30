import React, { Component } from "react";
import {
  Col,
  Row,
  Media
} from "reactstrap";
import "./App.css";
import WatchTrailer from "./WatchTrailer";

export default class MovieList extends Component {
  render() {

    return (
      <Row>
        {this.props.movies.map((movie, index) => (
          <Movie {...movie} key={index} />
        ))}
      </Row>
    );
  }
}

const Movie = ({
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
  popularity
}) => {

  return (

    <Col lg="6">
      <Media className="movie-card">
        <Media left href="#">
          <Media
            object
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt="Generic placeholder image"
          />
        </Media>
        <Media body>
          <Media heading>
            {title}
          </Media>
          <Media>
            {release_date} &nbsp;&nbsp;
            <div>
              <strong >
                <i className="fas fa-star" aria-hidden="true" />{vote_average}
              </strong>
              <strong>
                &nbsp;&nbsp;<i className="fas fa-eye " />
                {Math.round(popularity)}
              </strong>
            </div>
          </Media>
          <Media>{overview.substring(180, 0) + "..."} </Media>
          <div>
            <WatchTrailer />
          </div>
        </Media>
      </Media>
    </Col>

  )
};


