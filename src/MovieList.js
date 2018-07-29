import React, { Component } from "react";
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Button,
  Col,
  Row,
  Media
} from "reactstrap";
import "./App.css";

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
  id,
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
          <Media className>
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
          <Media>{overview.substring(180, 0) + "... See more."} </Media>
          <div >
            <Button outline color="danger" className="trailer-btn" >
              Watch Trailer
            </Button>
          </div>
        </Media>
      </Media>
    </Col >

  );
};


