import React from "react";
import { Row, Spinner } from "react-bootstrap";
import Movie from "./Movie";

const Gallery = ({ title, loading, fetchComments, comments, movies }) => (
  <>
    <h4>{title}</h4>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 text-center">
      {loading
        ? [0, 1, 2, 3, 4, 5].map((movie) => (
            <div style={{ width: "10%", height: "auto" }} key={movie}>
              <Spinner animation="border" variant="light" />
            </div>
          ))
        : movies.map((movie) => (
            <Movie
              data={movie}
              key={movie.imdbID}
              comments={comments}
              fetchComments={fetchComments}
            />
          ))}
    </Row>
  </>
);

export default Gallery;
